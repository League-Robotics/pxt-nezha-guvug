input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        nezhaV2.comboMove(20, nezhaV2.VerticallDirection.Up, 20, nezhaV2.DistanceAndAngleUnit.cm)
        nezhaV2.comboRotate(90, 20)
    }
})
nezhaV2.setComboMotor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M2)
nezhaV2.setWheelPerimeter(28.133, nezhaV2.Uint.cm)
nezhaV2.setWheelBase(11.56, nezhaV2.Uint.cm)
nezhaV2.setComboRotateCalibration(1)
basic.forever(function () {
	
})
