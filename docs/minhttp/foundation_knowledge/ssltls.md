---
sidebar_position: 2
---
# Enabling SSL/TLS
Enabling SSL/TLS as your security layer for HTTPS.

1. Install OpenSSL
2. Change your working directory to the project root.
```bash
cd minhttp
```
3. Generate a private key.
```bash
openssl genpkey -algorithm RSA -out key.pem -aes256
```
4. Generate a self-signed certificate.
```bash
openssl req -new -x509 -key key.pem -out cert.pem -days 365
```
5. Configure your server to use SSL/TLS by setting the `ssl_enabled` parameter to `True` in the `MinHTTPServer` constructor.
```python
app = minhttpserver.MinHTTPServer(host, port, ssl_enabled=True)
```