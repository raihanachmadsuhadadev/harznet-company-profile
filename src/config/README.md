# Konfigurasi

Folder ini menampung konfigurasi aplikasi yang aman berada di source code, seperti metadata site, navigation configuration, feature flags publik, dan konstanta runtime publik.

Credential, token, secret, dan internal endpoint dilarang disimpan di folder ini. Konfigurasi rahasia harus tetap server-only dan tidak menggunakan prefix `NEXT_PUBLIC_` agar tidak masuk ke client bundle.

Tiket ini belum memasukkan konfigurasi bisnis aktual.
