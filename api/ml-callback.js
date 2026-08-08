/* Callback do OAuth do Mercado Livre.
   Troca o "code" recebido por access_token + refresh_token.
   Uso: só é acessado durante a autorizacao inicial (uma vez por conta).
   Depois de copiar o refresh_token para a env ML_REFRESH_TOKEN no Vercel,
   este endpoint deixa de ser necessario para o dia a dia. */
export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) {
    res.status(400).send('Falta o parametro "code" na URL.');
    return;
  }

  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: process.env.ML_CLIENT_ID,
    client_secret: process.env.ML_CLIENT_SECRET,
    code,
    redirect_uri: process.env.ML_REDIRECT_URI,
    code_verifier: process.env.ML_CODE_VERIFIER
  });

  const r = await fetch('https://api.mercadolibre.com/oauth/token', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: params
  });

  const data = await r.json();

  if (!r.ok) {
    res.status(r.status).json(data);
    return;
  }

  res.setHeader('content-type', 'text/plain; charset=utf-8');
  res.status(200).send(
    'Autorizacao concluida!\n\n' +
    'access_token: ' + data.access_token + '\n' +
    'refresh_token: ' + data.refresh_token + '\n' +
    'expires_in: ' + data.expires_in + '\n' +
    'user_id: ' + data.user_id + '\n\n' +
    'Copie o refresh_token e salve como variavel de ambiente ML_REFRESH_TOKEN no Vercel.'
  );
}
