<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrlScan extends Model
{
    use HasFactory;

    protected $fillable = [
        'url',
        'user_id',
        'is_malicious',
        'scan_results',
        'scanned_at',
    ];

    protected $casts = [
        'is_malicious' => 'boolean',
        'scan_results' => 'array',
        'scanned_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
} 