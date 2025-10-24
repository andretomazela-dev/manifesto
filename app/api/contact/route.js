// app/api/contact/route.js
export async function POST(req) {
  try {
    const formData = await req.formData();

    // Honeypot: se vier preenchido, tratamos como bot (fingimos sucesso)
    if ((formData.get("website") || "").toString().trim()) {
      return Response.json({ ok: true });
    }

    // Token do Turnstile (padrão: cf-turnstile-response)
    const token =
      formData.get("cf-turnstile-response") || formData.get("turnstile");

    if (!token) {
      return Response.json({ error: "Verificação ausente." }, { status: 400 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? undefined;

    // Valida no Cloudflare
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
          ...(ip ? { remoteip: ip } : {}),
        }),
      }
    ).then((r) => r.json());

    if (!verifyRes.success) {
      return Response.json({ error: "Falha na verificação." }, { status: 400 });
    }

    // Remover campos que não devem ir para o Formspree
    formData.delete("cf-turnstile-response");
    formData.delete("turnstile");
    formData.delete("website");

    // Encaminha ao Formspree
    const fsRes = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_ID}`,
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      }
    );

    const payload = await fsRes
      .json()
      .catch(() => ({ ok: fsRes.ok, status: fsRes.status }));

    return Response.json(payload, { status: fsRes.ok ? 200 : fsRes.status });
  } catch {
    return Response.json({ error: "Erro interno." }, { status: 500 });
  }
}
