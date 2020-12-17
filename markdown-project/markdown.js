
function readInput(){
var inputData = `Heading
=======

Sub-heading
-----------

Paragraphs are separated
by a blank line.

Two spaces at the end of a line  
produces a line break.

Text attributes _italic_, 
**bold**, \`monospace\`.

Horizontal rule:

---

Strikethrough:
~~strikethrough~~
`
    return inputData.split('\n');
}

function replaceSpecialChar(line, specialChar, replaceCharStart, replaceCharEnd){
    var i = 0;
    while(line.includes(specialChar)){
        if(i%2 == 0)
            line = line.replace(specialChar, replaceCharStart);
        else
            line = line.replace(specialChar, replaceCharEnd);

        i++;
    }
    return line;
}

function replaceBold(line){
    return replaceSpecialChar(line, "**", "<strong>", "</strong>");
}

function replaceStrikeThrough(line){
    return replaceSpecialChar(line, "~~", "<strike>", "</strike>");
}

function replaceItalics(line) {
    return replaceSpecialChar(line, "_", "<em>", "</em>");
}

function replaceMonospace(line) {
    return replaceSpecialChar(line, "`", "<code>", "</code>");
}

function applyTemplatingOnLine(line){

    if (line.includes("_")){
        line = replaceItalics(line);
    }
    
    if ( line.includes("**")){
        line = replaceBold(line);
    }

    if ( line.includes("`")){
        line = replaceMonospace(line);
    }

    if ( line.includes("~~")){
        line = replaceStrikeThrough(line);
    }

    return line;

}

var lines = readInput();

var groupFormatter = false;
for(var i=0; i < lines.length; i++){
    
    var line = lines[i];
    if(line.startsWith("====")){
        lines[i-1] = `<h1>${lines[i-1]}</h1>`;
        lines[i] = "FORMATTING-LINE";
        groupFormatter = true;
    } else if(line.startsWith("---") && !lines[i-1]){
        lines[i-1] = `<h2>${lines[i-1]}</h2>`;
        lines[i] = "FORMATTING-LINE";
        groupFormatter = true;
    } else if(line.startsWith("---") &&lines[i-1]){
        lines[i] = "<hr />";
        groupFormatter = true;
    } 
    
    if(line.endsWith("  ")){
        lines[i] = `${lines[i]}</br>`;
    } 
    
    lines[i] = applyTemplatingOnLine(lines[i]);

    
}

var paragraphStarted = false;
for(var i=0; i < lines.length; i++){
    
    var line = lines[i];
    if(!line){
        if(paragraphStarted){
            lines[i] = "</p> <p>";    
            paragraphStarted = true;
        }else {
            lines[i] = "<p>";
            paragraphStarted = true;
        }
    } else if(line.includes("FORMATTING-LINE")){
        paragraphStarted = false;
        for(j = i; j > 0; j--){
            if(lines[j].includes("<p>") || lines[j].includes("</p> <p>")){
                lines[j] = "";
                break;
            }
        }
    }
}
if(paragraphStarted){
    lines[lines.length-1] = lines[lines.length-1] +"</p>";
}


console.log(lines.filter(line => !line.includes("FORMATTING-LINE")).join("\n"));