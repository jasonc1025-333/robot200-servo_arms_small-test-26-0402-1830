input.onButtonPressed(Button.A, function () {
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Servo_Arm_Left: Down = 000 deg"
    )
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . # . . .
        . . . . .
        `)
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
    quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Servo_Arm_Right: Down = 000 deg"
    )
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . # .
        . . . . .
        `)
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
    quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
})
input.onButtonPressed(Button.AB, function () {
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Servo_Arm_Left: Up_Full = 180 deg"
    )
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
    quest_ServoArm_DegreesInDirection_Enum.Degree_180_Up_Full,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Servo_Arm_Right: Up_Full = 180 deg"
    )
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        . . . . .
        . . . . .
        `)
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
    quest_ServoArm_DegreesInDirection_Enum.Degree_180_Up_Full,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
})
input.onButtonPressed(Button.B, function () {
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Servo_Arm_Left: Up_Half = 090 deg"
    )
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
    quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Half,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Servo_Arm_Right: Up_Half = 090 deg"
    )
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . . . .
        . . . . .
        `)
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
    quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Half,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
})
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"2-Sequence Animation Validates New-Start"
)
basic.showIcon(IconNames.Heart)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Teacher:"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"micro:bit's LED Display is upside-down on bot"
)
display.rotateTo(display.Direction.UpsideDown)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Student:"
)
quest_Note_2.quest_Show_String_For_Note_Big_Func(
"Servo_Arm_Left: Setup: Up_Full = 180 deg"
)
basic.showLeds(`
    . . . . .
    . # . . .
    . # . . .
    . . . . .
    . . . . .
    `)
quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(
quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
quest_ServoArm_DegreesInDirection_Enum.Degree_180_Up_Full,
quest_Debug_Show_Enum.Dashboard_OLED
)
quest_Note_2.quest_Show_String_For_Note_Big_Func(
"Servo_Arm_Right: Setup: Up_Full = 180 deg"
)
basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    . . . . .
    . . . . .
    `)
quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(
quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
quest_ServoArm_DegreesInDirection_Enum.Degree_180_Up_Full,
quest_Debug_Show_Enum.Dashboard_OLED
)
basic.forever(function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Ver 0.1.0: 26-0402-1830"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2026 Quest Institute. All rights reserved."
    )
})
