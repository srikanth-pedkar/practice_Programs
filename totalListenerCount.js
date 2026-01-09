/*
Your job is to create a class called Solution, that will denote a song!
A new song (Solution object) will take two parameters, title and artist.
You will also have to create an instance method named howMany().
The method takes the number of people who listened to the song that day as input and adds it to the existing listener count and returns the total listener count.
Steps
Create a class from scratch! Class name should be Solution.
Write -
1. A constructor named Solution which requires two strings title and artist as its parameter
2. A method named howMany() which requires an integer listenerCount as its parameter and returns an integer
3. Two more methods named getTitle() and getArtist() which doesn’t require any parameter but returns a string which are title and artist respectively.
*/

class Solution{
    totalListenerCount = 0;
    
    constructor(title, artist){
        this.title = title;
        this.artist = artist;
    }

    howMany(listenerCount){
        this.totalListenerCount += listenerCount;
        return this.totalListenerCount;
    }

    getTitle(){
        return this.title;
    }

    getArtist(){
        return this.artist;
    }
}

let hikaruNara = new Solution("Hikaru Nara", "Goose House");
console.log(hikaruNara.getArtist());
console.log(hikaruNara.getTitle());
console.log(hikaruNara.howMany(5));
hikaruNara.howMany(15);
console.log(hikaruNara.howMany(5));

let bahubali = new Solution("Keeravani", "Saho re bahubali");
console.log(bahubali.howMany(10));
console.log(bahubali.getArtist());
console.log(bahubali.getTitle());
console.log(hikaruNara.howMany(2));