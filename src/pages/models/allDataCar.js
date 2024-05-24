
import audi from "../../img/cars-big/audia1.jpg"
import audiBox from "../../img/cars-big/audi-box.png"

import benz from "../../img/cars-big/benz.jpg"
import benzBox from "../../img/cars-big/benz-box.png"

import bmw from "../../img/cars-big/bmw320.jpg"
import bmwBox from "../../img/cars-big/bmw-box.png"


import golf from "../../img/cars-big/golf6.jpg"
import golfBox from "../../img/cars-big/golf6-box.png"

import passat from "../../img/cars-big/passatcc.jpg"
import passatBox from "../../img/cars-big/passat-box.png"

import toyota from "../../img/cars-big/toyotacamry.jpg"
import toyotaBox from "../../img/cars-big/toyota-box.png"


const dataCar = [
    {
        id: 1,
        title: "Audi A1 S-Line",
        name: "Audi A1",
        model: "Audi",
        mark: "A1",
        price: 4000,
        year: 2018,
        transmission: "Автомат",
        doors: "4/5",
        AC: "Есть",
        fuel: "Бензин",
        src: audi,
        srcBox: audiBox,
        open: true
    },
    {
        id: 2,
        title: "VW Golf 6",
        name: "Golf 6",
        model: "Golf 6",
        mark: "VW",
        price: 2500,
        year: 2016,
        transmission: "Механика",
        doors: "4/5",
        AC: "Есть",
        fuel: "Дизель",
        src: golf,
        srcBox: golfBox,
        open: false
    },
    {
        id: 3,
        title: "Toyota Camry",
        name: "Toyota",
        model: "Camry",
        mark: "Toyota",
        price: 3500,
        year: 2018,
        transmission: "Автомат",
        doors: "4/5",
        AC: "Есть",
        fuel: "Дизель",
        src: toyota,
        srcBox: toyotaBox,
        open: false
    },
    {
        id: 4,
        title: "BMW 320 ModernLine",
        name: "BMW 320",
        model: "320",
        mark: "BMW",
        price: 3200,
        year: 2016,
        transmission: "Механика",
        doors: "4/5",
        AC: "Есть",
        fuel: "Бензин",
        src: bmw,
        srcBox: bmwBox,
        open: false
    },
    {
        id: 5,
        title: "Mercedes-Benz GLK",
        name: "Mercedes",
        model: "Benz GLK",
        mark: "Merc",
        price: 4500,
        year: 2014,
        transmission: "Автомат",
        doors: "4/5",
        AC: "Есть",
        fuel: "Бензин",
        src: benz,
        srcBox: benzBox,
        open: false
    },
    {
        id: 6,
        title: "VW Passat CC",
        name: "VW Passat",
        model: "Passat CC",
        mark: "VW",
        price: 2500,
        year: 2017,
        transmission: "Автомат",
        doors: "4/5",
        AC: "Есть",
        fuel: "Бензин",
        src: passat,
        srcBox: passatBox,
        open: false
    },
]

export default dataCar;