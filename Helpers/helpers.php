<?php

if (!function_exists('obscure')) {

    function obscure($value) {
        $obscured = null;
        $identifier = md5(uniqid(true));
        $charset = '+-.012345678@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
        $key = str_shuffle($charset);

        for ($i = 0; $i < strlen($value); $i++) {
            $obscured .= $key[strpos($charset, $value[$i])];
        }

        $output = <<<EOT
            <span id="{$identifier}">[Email Protected]</span>
            <script>

            </script>

EOT;
        return $output;
    }

}
