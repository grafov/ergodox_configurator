package main

import (
	"bufio"
	"bytes"
	"fmt"
	"os"
	"regexp"
)

func main() {
	f, err := os.Open("pos.txt")
	if err != nil {
		panic(err)
	}

	// re := regexp.MustCompile(`^(\.\d+)+\:\$(\d)\.\$(\d+)\s+(\S.+)$`)
	re := regexp.MustCompile(`^(?:\.\d+)+\:\$(\d)\.\$(\d+)\s+(\S.+)`)
	buf := bytes.NewBufferString(`<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div id="layers">
</div>

<div class="holder">
`)
	r := bufio.NewReader(f)
	for {
		line, err := r.ReadString('\n')
		if err != nil {
			break
		}

		matches := re.FindStringSubmatch(line)

		// strangeNum := matches[1]
		num := matches[2]
		cssText := matches[3]

		// if strangeNum == "0" {
		buf.WriteString(`<div id="key` + num + `" class="key" data-num="` + num + `" style="` + cssText + `">` + num + `</div>`)
		// }
	}
	buf.WriteString(`
</div>

<div id="form">
    <table>
        <tr><td>Id:     </td><td id="id"></td></tr>
        <tr><td>Macro:  </td><td><input id="macro"   type="text" size="50"></td></tr>
    </table>
</div>

<script type="text/javascript" src="index.js"></script>
</body></html>`)
	fmt.Println(string(buf.Bytes()))
}
