@component('mail::message')
# Hi, Claude

### {{ $first_name }} {{ $last_name }} contacted you via website.

* Email: {{ $email }}
* Phone: {{ $phone }}
* Company Name: {{ $company_name ?? 'No company name' }}
* Website Url: {{ $website ?? 'No website' }}

## Subject
{{ $subject }}

----------

## Message
{{ $message }}




Thanks,<br>
{{ config('app.name') }}
@endcomponent
