$(document).ready(function() {
    var excuse1 = ['The referee' , 'The 4th Official','The assistant referee','Their Manager','The media','The FA','The opposition','The weather','Paul Pogba','Luke Shaw', 'Anthony Martial','my pregnant dad','my ugly fish'];
    var excuse2 = ['did not listen to','underestimated the size of','turned a blind eye to','was disrespectful to','does not understand','has destablished','has provoked divisions in','plays a different system to','was intimidated by','ignored',"likes beastiality because","died of std because"];
    var excuse3 = ['my ego.','the cosmic principle of Karma.','my Special One talent.','my innate superiority.','my instructions.','the dressing room.','all the trophies I have won.','my signings.',"Paul Pogba's transfer fee.","Sir Alex Ferguson.","of my smoking habit","of footballs"];
    var random1 = excuse1[Math.floor(Math.random() * excuse1.length)];
    var random2 = excuse2[Math.floor(Math.random() * excuse2.length)];
    var random3 = excuse3[Math.floor(Math.random() * excuse3.length)];
    console.log(random1 +" "+ random2 +" "+ random3);   
    $(".excuse").text(random1 +" "+ random2 +" "+ random3); 
    $(".man-utd").click(function(){
        var random1 = excuse1[Math.floor(Math.random() * excuse1.length)];
        var random2 = excuse2[Math.floor(Math.random() * excuse2.length)];
        var random3 = excuse3[Math.floor(Math.random() * excuse3.length)];
        $(".excuse").text(random1 +" "+ random2 +" "+ random3); 
    });
});
