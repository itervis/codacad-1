<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => ['required', 'string', 'max:20'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'alpha_num', 'min:3'],
         ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }


        // $request->validate(
        //     [
        //         'username'=>'required|string|max:20',
        //         'email'=>      'required|email|unique:users,email',
        //         'password'=>      'required|alpha_num|min:3',

        //     ]
        // );

        

       $user = User::create(
            [
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password'))
            ]
        );

        if(!is_null($user)) {
            return response ([
                "success" => "Success! Registration completed"
            ]);
            // back()->with("success", "Success! Registration completed");
        }

        else {
            return response (["failed"=> "Alert! Failed to register"]);
            // back()->with("failed", "Alert! Failed to register");
        }
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response([
                'message' => 'Invalid credentials!'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();

        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60 * 24); 

        return response([
            'message' => $token
        ])->withCookie($cookie);
    }

    public function user()
    {
        return Auth::user();
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }
}