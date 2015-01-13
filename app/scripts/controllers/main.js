'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'JOE',
    			'description': 'Jeopardy Open Ecosystem sebuah inisiatif yang muncul post­JENI (Java Education Network Indonesia), yang dikembangkan BKLN pada tahun 2006.',
    			'faClass': 'icon-pen',
                'link': '#joe'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Kurikulum',
    			'description': 'Saat ini kami telah mengembangkan 10 mata pelajaran yang terintegrasi antara D3 dan S1.',
    			'faClass': 'icon-books',
                'link': '#curriculum'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Teknologi',
    			'description': 'Teknologi yang kami gunakan berhubungan dengan pengembangan solusi industri.',
    			'faClass': 'icon-web9',
                'link': '#technology'
    		},
            {
                'image': 'images/bg4.jpg',
                'text': 'title',
                'title': 'Dukungan',
                'description': 'Kami menyediakan dukungan bagi anda yang berminat bergabung bersama kami.',
                'faClass': 'icon-support',
                'link': '#support'
            }
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });
