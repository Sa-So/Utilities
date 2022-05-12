# JSON Prettier

## save into a file named res.json
```
'{"foo": {"g":"h"}, "bar": "ipsum"}' | python -m json.tool > res.json
```

## sort keys
```console
Mac:beautify_json sahilsoni$  echo '{"foo": {"g":"h"}, "bar": "ipsum"}' | python -m json.tool
{
    "bar": "ipsum",
    "foo": {
        "g": "h"
    }
}
Mac:beautify_json sahilsoni$  echo '{"foo": {"g":"h"}, "bar": "ipsum"}' | python3 -m json.tool
{
    "foo": {
        "g": "h"
    },
    "bar": "ipsum"
}
Mac:beautify_json sahilsoni$  echo '{"foo": {"g":"h"}, "bar": "ipsum"}' | python3 -m json.tool --sort-keys
{
    "bar": "ipsum",
    "foo": {
        "g": "h"
    }
}
```
## links
https://stackoverflow.com/questions/4651437/how-do-i-set-a-variable-to-the-output-of-a-command-in-bash?rq=1
https://stackoverflow.com/questions/352098/how-can-i-pretty-print-json-in-a-shell-script
https://stackoverflow.com/questions/3515523/javascript-how-to-generate-formatted-easy-to-read-json-straight-from-an-object
https://stackoverflow.com/questions/2614862/how-can-i-beautify-json-programmatically
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
