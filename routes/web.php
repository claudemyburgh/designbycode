<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/','welcome')->name('welcome');
Route::view('services','services')->name('services');

// Route::view('contact/send','contact-us')->name('contact-us');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


// Route::get('/contact/send/1', 'Form\SendControllerStep1@index');
// Route::get('/contact/send/2', 'Form\SendControllerStep2@index');

Route::multistep('contact/send', 'Form\SendController')
    ->steps(4)
    ->name('contact.send');

Route::get('contact/send/thanks/', 'Form\ThankYouController@index')->name('contact.send.thanks');
