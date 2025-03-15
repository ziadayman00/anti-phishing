<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/contact', [ContactController::class, 'show'])->name('contact.show');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('service');

Route::get('/about', function () {
    return Inertia::render('AboutUs');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('ContactUs');
})->name('contact');

Route::get('/url-check', function () {
    return Inertia::render('UrlCheck');
})->name('url.check');

Route::get('/training', function () {
    return Inertia::render('TrainingContent');
})->name('training');

Route::get('/terms-of-use', function () {
    return Inertia::render('TermsOfUse');
})->name('terms');

// Simulation Routes
Route::get('/simulation', function () {
    return Inertia::render('Simulation');
})->name('simulation');

Route::get('/simulation/email', function () {
    return Inertia::render('EmailPhishingSimulation');
})->name('simulation.email');

Route::get('/simulation/sms', function () {
    return Inertia::render('SMSSimulation');
})->name('simulation.sms');

Route::get('/simulation/vishing', function () {
    return Inertia::render('VishingSimulation');
})->name('simulation.vishing');

Route::get('/simulation/website', function () {
    return Inertia::render('WebsiteSimulation');
})->name('simulation.website');

Route::get('/simulation/social', function () {
    return Inertia::render('SocialSimulation');
})->name('simulation.social');

Route::get('/simulation/multi-channel', function () {
    return Inertia::render('MultiChannelSimulation');
})->name('simulation.multi-channel');

Route::get('/simulation/results', function () {
    return Inertia::render('SimulationResult', [
        'score' => request()->session()->get('simulation_score', 80), // Default to 80 for now
        'totalSteps' => 5, // يمكنك تعديلها حسب عدد الخطوات في كل سيميوليشن
    ]);
})->name('simulation.results');

require __DIR__.'/auth.php';