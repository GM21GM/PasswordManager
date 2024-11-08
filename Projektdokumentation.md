# Passwort Manager

Projektbeschreibung
Passwort-Manager Extension auf welcher man Passwörter generieren und Speichern kann.


Teammitglieder: **Innamorato Giovanni**, Bischof Gabriel, Martullo Giuliano 

---

## Versionsverlauf

| Datum    | Version | Zusammenfassung                                                          |
| -------- | ------- | ------------------------------------------------------------------------ |
|   01.11.2024       |  1.0       |  Wir haben uns für ein Projekt entschieden und den Projektantrag an Herr Thut geschickt.   |
|  08.11.2024|1.1|
## 1 Informieren

### 1.1 Ihr Projekt

Wir erstellen eine Passwort Manager Extension welche man brauchen kann um sich Passwörter generieren zu lassen so wie um sie verschlüsselt Speichern zu lassen.
### 1.2 User Stories

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ               | Beschreibung                                                                                                                                                |
| ---- | --------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funktional        | Als Nutzer möchte ich ein sicheres Passwort generieren können, um sicherzustellen, dass meine Konten gut geschützt sind.                                     |
| 2    | Muss            | Funktional        | Als Nutzer möchte ich das generierte Passwort in einer verschlüsselten Datenbank speichern können, damit es nur für mich zugänglich ist.                     |
| 3    | Muss            | Funktional        | Als Nutzer möchte ich gespeicherte Passwörter durchsuchen können, um bei Bedarf einfach auf die Passwörter meiner Konten zugreifen zu können.                 |
| 4    | Sollte          | Funktional        | Als Nutzer möchte ich ein generiertes Passwort anpassen können (z.B. Länge, Zeichenarten), um spezifischen Anforderungen gerecht zu werden.                  |
| 5    | Sollte          | Funktional        | Als Nutzer möchte ich meine Passwörter in der Zwischenablage speichern können, um sie schnell in andere Anwendungen einfügen zu können.                      |
| 6    | Muss            | Qualität          | Als Nutzer möchte ich sicherstellen, dass meine gespeicherten Passwörter verschlüsselt sind, damit meine Daten auch bei Verlust der Datenbank geschützt sind.|
| 7    | Sollte          | Funktional        | Als Nutzer möchte ich eine Möglichkeit haben, gespeicherte Passwörter zu löschen, um meine Daten aktuell und relevant zu halten.                             |
| 8    | Kann            | Funktional        | Als Nutzer möchte ich eine Funktion zur Passwortstärke-Anzeige haben, um zu sehen, ob das generierte Passwort sicher genug ist.                              |


### 1.3 Testfälle

### 1.3 Testfälle für Passwortmanager-Browsererweiterung

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1    | Passwortgenerator ist aktiv | "Passwort generieren" Button klicken | Ein neues, sicheres Passwort wird angezeigt |
| 2    | Generiertes Passwort vorhanden | "Speichern" Button klicken | Passwort wird sicher gespeichert und Bestätigung wird angezeigt |
| 3    | Passwortmanager ist geöffnet | Eingabe eines bestehenden Passworts | Passwort wird korrekt angezeigt und als gespeichert markiert |
| 4    | Kein Passwort im Generatorfeld | "Speichern" Button klicken | Fehlermeldung "Kein Passwort vorhanden" wird angezeigt |
| 5    | Passwort wird generiert mit speziellen Einstellungen (z.B. Länge und Sonderzeichen) | Passwortlänge und Sonderzeichen auswählen und "Generieren" klicken | Passwort entspricht den gewählten Kriterien |
| 6    | Generiertes Passwort soll kopiert werden | "Kopieren" Button klicken | Passwort wird in die Zwischenablage kopiert, und eine Bestätigung wird angezeigt |
| 7    | Passwortmanager-Datenbank ist leer | "Gespeicherte Passwörter anzeigen" Button klicken | Meldung "Keine gespeicherten Passwörter vorhanden" wird angezeigt |
| 8    | Gespeichertes Passwort vorhanden | "Löschen" Button neben einem Passwort klicken | Passwort wird aus der Datenbank entfernt und wird nicht mehr angezeigt |


## 2 Planen

| AP-№ | Frist    | Zuständig | Beschreibung                                                                                                          | geplante Zeit (Minuten) |
| ---- | -------- | --------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 01    |  8.11.24        |    Innamorato, Bischof       |          Informieren|     120   |
| 02    |  8.11.24        |       Martullo  |  Planen des Projektablaufs      |   120      |
| 03    |  8.11.24        |     Innamorato    |    Demo erstellen    |    120         |
| 04    |  8.11.24        |         |        |               |
| 05    |  8.11.24        |         |        |            |
| 06    |  8.11.24        |         |        |             |
| 07    |  8.11.24        |         |        |            |
| 08    |  8.11.24        |         |        |            |
| 09    |  8.11.24        |         |        |              |
| 10    |  8.11.24        |         |        |              |
| 11    |  13.12.24        |    Martullo     |  Projekt Testen      | 120             |
| 12    |  20.12.24        |   Innamorato, Bischof, Martullo      |   Verfassen des Portfolios, Fertigstellung Projektdokumentation     |      180    |

## 3 Entscheiden
## 4 Realisieren

| AP-№ | Datum    | Zuständig                  | Geplante Zeit | Tatsächliche Zeit |
| ---- | -------- | -------------------------- | ------------- | ----------------- |
| 1    |          |                            |               |                   |
| 2    |          |                            |               |                   |
| 3    |08.11|Innamorato|120'|180'|
| 4    |          |                            |               |                   |
| 5    |          |                            |               |                   |
| 6    |          |                            |               |                   |
| 7    |          |                            |               |                   |
| 8    |          |                            |               |                   |

## 5 Kontrollieren

### Testprotokoll

| TC-№ | Datum | Resultat | Tester   |
| ---- | ----- | -------- | -------- |
| 1    |       |          |          |
| 2    |       |          |          |
| 3    |       |          |          |
| 4    |       |          |          |
| 5    |       |          |          |
| 6    |       |          |          |
| 8    |       |          |          |

## 6 Auswerten
