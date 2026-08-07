# Feature

Folder ini menampung modul berdasarkan feature atau domain. Satu feature dapat memiliki components, types, validation, dan service yang khusus untuk feature tersebut.

Contoh konseptual meliputi `contact/`, `information/`, dan `questionnaire/`. Contoh tersebut hanya mendokumentasikan pola; foldernya belum dibuat pada tiket ini.

Feature tidak boleh bergantung langsung pada internal internal operational systems. Komponen yang benar-benar reusable lintas feature harus ditempatkan di `src/components`, bukan dipertahankan di satu feature.
