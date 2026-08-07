# Library Internal

Folder ini menjadi satu-satunya lokasi utility dan helper murni. Setiap utility harus memiliki tanggung jawab tunggal serta tidak memuat business logic, UI component, atau data content.

Jangan membuat folder `utils` terpisah karena `lib` menjadi lokasi utility tunggal. Helper server-only harus diberi batas yang jelas agar tidak dapat masuk ke client bundle.

Tidak ada utility yang ditambahkan pada tiket ini.
