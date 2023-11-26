#!/bin/bash
for VARIABLE in {16..68}
do
	curl "https://prompt-to-prompt.github.io/ptp_files/bunny_seq/fluffy_bunny_$VARIABLE.png" --output "fluffy_bunny_$VARIABLE.png"

done
