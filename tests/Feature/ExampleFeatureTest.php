<?php

test('the application returns a successful response', function () {
    expect($this->get('/'))->assertStatus(200);
});
