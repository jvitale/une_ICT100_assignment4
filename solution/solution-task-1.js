/* 
TODO: Task 1 => add a click event to the button 'button-text-command' 
parse natural language commands to teleport robots
around the restaurant. The parsed robot and destination
must be published as a message for the topic
'new_command'. The message for this topic has the following
structure:
{
    robotID: <the name ID of the robot in the command>,
    landmarkID: <the name ID of the destination landmark>
}

BONUS TASK (0.5 bonus marks) => add a click event to the
button 'button-voice-command' that listens to the user's command,
parse it as above and publish the message on 'new_command' topic.
As long as the parser and publisher are correct it is not 
important if the speech-to-text fails to correctly recognise
the voice command.
*/
