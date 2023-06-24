/**
 * Music player 
 * by MysticArtHandWear developer
 */
var player = function () {
    this.musicPlayer = {
        play: function () {
            var audioElement = document.getElementById("musicTheme");
            if (audioElement.paused) {
                audioElement.play();
                console.log("Let the music play...");
            }
        },
        pause: function () {
            document.getElementById("musicTheme").pause();
        }
    };
};

let mp3Player = new player();

/**
 * Banner
 */
function MysticArtHandWear(){
    console.log(" |  \\/  |         | | (_)        /\\        | | | |  | |               | \\ \\        / /\n" +
            " | \\  / |_   _ ___| |_ _  ___   /  \\   _ __| |_| |__| | __ _ _ __   __| |\\ \\  /\\  / /__  __ _ _ __\n" +
            " | |\\/| | | | / __| __| |/ __| / /\\ \\ | '__| __|  __  |/ _` | '_ \\ / _` | \\ \\/  \\/ / _ \\/ _` | '__|\n" +
            " | |  | | |_| \\__ \\ |_| | (__ / ____ \\| |  | |_| |  | | (_| | | | | (_| |  \\  /\\  /  __/ (_| | |\n" +
            " |_|  |_|\\__, |___/\\__|_|\\___/_/    \\_\\_|   \\__|_|  |_|\___,_|_| |_|\\__,_|   \\/  \\/ \\___|\\__,_|_|\n" +
            "          __/ |\n" +
            "         |___/");
}