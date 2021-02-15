<?php



if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $input = json_decode(file_get_contents('php://input'));

    if (
        $input !== null
        && isset($input->name) && !empty($input->name)
        && isset($input->subject) && !empty($input->subject)
        && isset($input->email) && !empty($input->email)
        && isset($input->content) && !empty($input->content)
        && isset($input->phone) && !empty($input->phone)

    ) {
        $email = "up.19906@gmail.com";
        $content = "อีเมล: " . $input->email;
        $content .= "\n";
        $content .= "ชื่อ : " . $input->name;
        $content .= "\n";
        $content .= "เบอร์โทรศัพท์ : " . $input->phone;
        $content .= "\n";
        $content .= "หัวข้อเรื่อง : " . $input->subject;
        $content .= "\n";
        $content .= "รายละเอียด : " . $input->content;

        mail($email, $input->subject, $content);

        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
        header("Access-Control-Expose-Headers: access-control-allow-origin");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        header("Content-Type: application/json; charset=UTF-8");
        
        echo json_encode(['success' => true]);
        exit();
    }
}

// header('Access-Control-Allow-Origin: *');
// header('Content-type: application/json');
echo json_encode(['success' => false]);
exit();