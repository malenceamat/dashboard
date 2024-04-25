<?php

namespace App\Http\Requests;

use App\Models\IndicatorProgram;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DateRequest extends FormRequest
{
    public function rules()
    {

        return [
            'date' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'date.required' => 'Пожалуйста, выберите дату',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
