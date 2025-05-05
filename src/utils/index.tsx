export async function encryptEmail(email: string): Promise<{
  encrypted: string;
  key: CryptoKey;
  iv: Uint8Array;
}> {
  const encoder = new TextEncoder();
  const data = encoder.encode(email);

  const key = await crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"]
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
    },
    key,
    data
  );

  const encryptedArray = new Uint8Array(encrypted);
  const base64 = btoa(String.fromCharCode(...encryptedArray));

  return { encrypted: base64, key, iv };
}

export async function decryptEmail(
  encrypted: string,
  key: CryptoKey,
  iv: Uint8Array
): Promise<string> {
  const encryptedArray = new Uint8Array(
    atob(encrypted)
      .split("")
      .map((c) => c.charCodeAt(0))
  );

  const decrypted = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv,
    },
    key,
    encryptedArray
  );

  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
}
