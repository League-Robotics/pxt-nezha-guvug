input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 3; index++) {
        servos.P1.setAngle(0)
        nezhaV2.comboMove(20, nezhaV2.VerticallDirection.Up, 20, nezhaV2.DistanceAndAngleUnit.cm)
        if (input.buttonIsPressed(Button.A)) {
            break;
        }
        servos.P1.setAngle(90)
        nezhaV2.comboRotate(90, 20)
        if (input.buttonIsPressed(Button.A)) {
            break;
        }
    }
})
servos.P1.setAngle(90)
nezhaV2.setComboMotor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M2)
nezhaV2.setWheelPerimeter(28.133, nezhaV2.Uint.cm)
nezhaV2.setWheelBase(11.56, nezhaV2.Uint.cm)
nezhaV2.setComboRotateCalibration(1)
let forward = 30
basic.forever(function () {
    let turn = PlanetX_Basic.TrackBit_get_offset() / 100
    nezhaV2.comboStart(forward + turn, forward - turn)
})
