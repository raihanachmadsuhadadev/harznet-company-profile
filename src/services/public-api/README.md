# Adapter Public API

Folder ini hanya diperuntukkan bagi adapter approved Public API HARZNET. Batas integrasinya adalah:

- Tidak boleh mengakses database internal operational systems secara langsung.
- Tidak boleh mengakses internal endpoint.
- Tidak boleh mengakses Network Connector atau Telemetry service.
- Tidak boleh menyimpan credential pada browser.
- Tidak boleh melakukan aktivasi pelanggan atau device provisioning.
- Integrasi sensitif harus dilakukan server-side.

Local TypeScript content tetap menjadi sumber data awal. Tiket ini belum membuat HTTP client atau network request aktual.
