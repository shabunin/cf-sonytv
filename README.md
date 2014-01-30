CommandFusion module for control Sony TVs.
=========

There's two files in forder "scripts".
First - SonyTV.js describes our module for multiple instances.
Second - userMain.js shows how to declare module for specific tv.
Only url required for declaration. You can try 'IP/IRCC' or 'IP/sony/IRCC'. If it won't work you can look upnp description of your tv and there will be controlURL for IRCC.

Then after you declare your tv you can control it by adding JavaScript commands <your instance>.sendCmd(<cmdName>)

List of commands:

> Analog
> Audio
> Blue
> ChannelDown
> ChannelUp
> Confirm
> Display
> Down
> EPG
> Exit
> Forward
> Green
> Home
> Input
> Left
> Mute
> Next
> Num0
> Num1
> Num2
> Num3
> Num4
> Num5
> Num6
> Num7
> Num8
> Num9
> Options
> PAP
> Pause
> Play
> Prev
> Red
> Return
> Rewind
> Right
> Stop
> SubTitle
> SyncMenu
> Up
> VolumeDown
> VolumeUp
> Wide
> Yellow
> HDMI1
> HDMI2
> HDMI3
> HDMI4
