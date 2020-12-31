class Club{
    name;
    points;
    GD;

    constructor(name,points,GD){
        this.name = name;
        this.points = points;
        this.GD = GD;
        this.position = position;
    }
}
    


class Rank{
    club;
    constructor(club){
        this.club = Club
    }
    sortRank(){
        for(i=0;i<Club.length<i++){
            for(j=0;j<Club.length<j++){
                if(Club[i].points>Club[j].points){
                    Club[i].position = Club.position[j];
                    Club[j].position = Club[i].position +1;
                }
                else if(Club[i].GD>Club[j].GD){
                    Club[i].position = Club.position[j];
                    Club[j].position = Club.position[i]+1;
                }
            }
        }
    }   
}

Club =[
    {
        name:"Arsenal",
        point:99,
        GD: 45
    },
    {
        name:"Mu",
        point:60,
        GD: 29
    },{
        name:"Chelsea",
        point:75,
        GD: 39
    },{
        name:"Liverpool",
        point:88,
        GD: 39
    },
]