<?php

namespace Tests\Feature;

use Illuminate\Http\Response;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAdminLoginsSuccessfully()
    {
        $response = $this->withHeaders([
            'Accept' => 'application/json',
        ])->post('/api/login', [
            'email' => env('ADMIN_EMAIL'),
            'password' => env('ADMIN_INITIAL_PASSWORD')
        ]);
 
        $response->assertStatus(Response::HTTP_OK);
        $response->assertJsonStructure(
            [
                'success',
                'message',
                'data' => [
                  'token',
                  'name'
                ]
            ]
        );
    }
}