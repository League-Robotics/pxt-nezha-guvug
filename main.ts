input.onButtonPressed(Button.A, function () {
    running = true
    basic.pause(100)
    while (running) {
        PlanetX_Basic.Trackbit_get_state_value()
        turn = PlanetX_Basic.TrackBit_get_offset() / 80
        nezhaV2.comboStart(forward + turn, forward - turn)
        if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5) || input.buttonIsPressed(Button.A)) {
            running = false
        }
    }
    nezhaV2.comboStop()
})
input.onButtonPressed(Button.B, function () {
    nezhaV2.comboStop()
    basic.pause(100)
    for (let index = 0; index <= 3; index++) {
        servos.P1.setAngle(0)
        nezhaV2.comboMove(20, nezhaV2.VerticallDirection.Up, 20, nezhaV2.DistanceAndAngleUnit.cm)
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
        servos.P1.setAngle(90)
        nezhaV2.comboRotate(90, 20)
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
})
let turn = 0
let running = false
let forward = 0
servos.P1.setAngle(90)
nezhaV2.setComboMotor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M2)
nezhaV2.setWheelPerimeter(28.133, nezhaV2.Uint.cm)
nezhaV2.setWheelBase(11.56, nezhaV2.Uint.cm)
nezhaV2.setComboRotateCalibration(1)
forward = 20
running = true
