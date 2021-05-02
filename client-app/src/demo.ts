 export interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: 'Hey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2: Duck = {
    name: 'Jey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

duck1.makeSound('Quak');

export const ducks = [duck1,duck2]