<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Eğer Composer ile yüklediysen
// Eğer manuel yüklediysen: require 'phpmailer/PHPMailer.php'; gibi yolları düzelt

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = htmlspecialchars($_POST["fullname"]);
    $student_id = htmlspecialchars($_POST["student_id"]);
    $department = htmlspecialchars($_POST["department"]);
    $class = htmlspecialchars($_POST["class"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $email = htmlspecialchars($_POST["email"]);
    $reason = htmlspecialchars($_POST["reason"]);
    $interests = isset($_POST["interest"]) ? implode(", ", $_POST["interest"]) : "Belirtilmedi";

    // Mail içeriği oluştur
    $message = "
    <h2>Yeni Kulüp Başvurusu</h2>
    <p><strong>Ad Soyad:</strong> $fullname</p>
    <p><strong>Öğrenci Numarası:</strong> $student_id</p>
    <p><strong>Bölüm:</strong> $department</p>
    <p><strong>Sınıf:</strong> $class</p>
    <p><strong>Telefon:</strong> $phone</p>
    <p><strong>E-posta:</strong> $email</p>
    <p><strong>Başvuru Nedeni:</strong> $reason</p>
    <p><strong>Katkı Sağlamak İstediği Alanlar:</strong> $interests</p>
    ";

    // PHPMailer ile e-posta gönderme
    $mail = new PHPMailer(true);
    try {
        // SMTP Ayarları
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';  // Gmail kullanıyorsan
        $mail->SMTPAuth   = true;
        $mail->Username   = 'ethemsari299@gmail.com'; // Gönderen e-posta adresi
        $mail->Password   = 'ocnu puyu ulaa onyh'; // Gmail için uygulama şifresi gerekli!
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Gönderici ve alıcı bilgileri
        $mail->setFrom('ethemsari299@gmail.com', 'Kulüp Başvuru Sistemi');
        $mail->addAddress('ethemsari299@mail.com', 'Kulüp Yetkilisi'); // Form verilerinin gideceği e-posta

        // E-posta içeriği
        $mail->isHTML(true);
        $mail->Subject = "Yeni Kulüp Başvurusu: $fullname";
        $mail->Body    = $message;

        // Maili gönder
        if ($mail->send()) {
            echo "Başvurunuz başarıyla gönderildi!";
        } else {
            echo "Mail gönderilirken hata oluştu.";
        }
    } catch (Exception $e) {
        echo "Mail gönderme başarısız. Hata: {$mail->ErrorInfo}";
    }
} else {
    echo "Geçersiz istek!";
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verilerinizi burada işleyin
    // Örneğin, form verilerini alıp mail atabilirsiniz
    // POST işlemi yapılır
    echo "Form başarıyla gönderildi!";
} else {
    echo "Geçersiz istek!";
}
?>

