<?php

return [
    'characters' => ['2', '3', '4', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'm', 'n', 'p', 'q', 'r', 't', 'u', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'M', 'N', 'P', 'Q', 'R', 'T', 'U', 'X', 'Y', 'Z'],
    'default' => [
        'length' =>4,
        'width' => 105,
        'height' => 40,
        'quality' => 90,
        'math' => false,
    ],
    'math' => [
        'length' => 4,
        'width' => 105,
        'height' => 40,
        'quality' => 90,
        'math' => true,
    ],

    'flat' => [
        'length' => 4,
        'width' => 105,
        'height' => 40,
        'quality' => 90,
        'lines' => 6,
        'bgImage' => false,
        'bgColor' => '#ecf2f4',
        'fontColors' => ['#2c3e50', '#c0392b', '#16a085', '#c0392b', '#8e44ad', '#303f9f', '#f57c00', '#795548'],
        'contrast' => -5,
    ],
    'mini' => [
        'length' =>4,
        'width' => 105,
        'height' => 40,
    ],
    'inverse' => [
        'length' =>4,
        'width' => 105,
        'height' => 40,
        'quality' => 90,
        'sensitive' => true,
        'angle' => 12,
        'sharpen' => 10,
        'blur' => 2,
        'invert' => true,
        'contrast' => -5,
    ]
];
