export class Paddler {
    firstName: string;
    lastName: string;
    weight: number;
    side: string;
    team: string;

    constructor(firstName: string, lastName: string, weight: number, side: string, team: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.weight = weight;
        this.side = side;
        this.team = team;
    }
}
