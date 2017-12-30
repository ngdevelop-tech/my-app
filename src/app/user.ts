export class User {
    userName: string;
    mobileNo: number;
    emailId: string;
    skills: string[] = ['Java', 'Angular'];

    constructor() {

    }

    addSkill(skill: string) {
        this.skills.push(skill);
    }
}
