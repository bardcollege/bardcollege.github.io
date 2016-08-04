/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * ported ELIZA (https://github.com/dhconnelly/paip-python) to javascript
 */

var rules = {
  "~*x hello ~*y": [
    "How do you do. Please state your problem."
  ],
  "~*x computer ~*y": [
    "Do computers worry you?",
    "What do you think about machines have to do with your problem?",
    "Don't you think computers can help people",
    "Why do you mention computers?",
    "What about computers worries you?",
    "What do you think about computers?",
    "What do you think machines have to do with your problem?",
  ],
  "~*x name ~*y": [
    "I am not interested in names",
  ],
  "~*x sorry ~*y": [
    "Please don't apologize",
    "Apologies are not necessary",
    "What feelings do you have when you apologize",
  ],
  "~*x I remember ~*y": [
    "Do you often think of ~y?",
    "Does thinking of ~y bring anything else to mind?",
    "What else do you remember?",
    "Why do you recall ~y right now?",
    "What in the present situation reminds you of ~y?",
    "What is the connection between me and ~y?",
  ],
  "~*x do you remember ~*y": [
    "Did you think I would forget ~y?",
    "Why do you think I should recall ~y now?",
    "What about ~y?",
    "You mentioned ~y",
  ],
  "~*x I want ~*y": [
    "What would it mean if you got ~y?",
    "Why do you want ~y?",
    "Suppose you got ~y soon.",
  ],
    "~*x I need ~*y": [
    "What would it mean if you got ~y?",
    "Why do you need ~y?",
    "Suppose you got ~y soon.",
  ],
  "~*x if ~*y": [
    "Do you really think it's likely that ~y?",
    "Do you wish that ~y?",
    "What do you think about ~y?",
    "Really--if ~y?",
  ],
  "~*x I dreamt ~*y": [
    "Really-- ~y",
    "Have you ever fantasized ~y while you were awake",
    "Have you dreamt of ~y before?",
  ],
  "~*x I dream about ~*y": [
    "How do you feel about ~y in reality?",
  ],
  "~*x dream ~*y": [
    "What does this dream suggest to you?",
    "Do you dream often?",
    "What persons appear in your dreams?",
    "Don't you believe that dream has to do with your problem?",
  ],
  "~*x my mother ~*y": [
    "Who else in your family ~y?",
    "Tell me more about your family",
  ],
  "~*x my father ~*y": [
    "Your father?",
    "Does he influence you strongly?",
    "What else comes to mind when you think of your father?",
  ],
  "~*x I am glad ~*y": [
    "How have I helped you to be ~y?",
    "What makes you happy just now?",
    "Can you explain why you are suddenly ~y?",
  ],
  "~*x I am sad ~*y": [
    "I am sorry to hear you are depressed",
    "I'm sure it's not pleasant to be sad",
  ],
  "~*x are like ~*y": [
    "What resemblence do you see between ~x and ~y?",
  ],
  "~*x is like ~*y": [
    "In what way is it that ~ is like ~y?",
    "What resemblence do you see?",
    "Could there really be some connection?",
    "How?",
  ],
  "~*x alike ~*y": [
    "In what way?",
    "What similarities are there?",
  ],
  "~*x same ~*y": [
    "What other connections do you see?",
  ],
  "~*x no ~*y": [
    "Why not?",
    "You are being a bit negative.",
    "Are you saying 'No' just to be negative?",
  ],
  "~*x I was ~*y": [
    "Were you really?",
    "Perhaps I already knew you were ~y.",
    "Why do you tell me you were ~y now?",
  ],
  "~*x was I ~*y": [
    "What if you were ~y?",
    "Do you think you were ~y?",
    "What would it mean if you were ~y?",
  ],
  "~*x I am ~*y": [
    "In what way are you ~y?",
    "Do you want to be ~y?",
  ],
  "~*x am I ~*y": [
    "Do you believe you are ~y?",
    "Would you want to be ~y?",
    "You wish I would tell you you are ~y?",
    "What would it mean if you were ~y?",
  ],
  "~*x am ~*y": [
    "Why do you say 'AM?'",
    "I don't understand that",
  ],
  "~x are ~*y": [
    "Did you think they might not be ~y?",
    "Possibly they are ~y",
  ],
  "~x is ~*y": [
    "Did you think it might not be ~y?",
    "Possibly it is ~y",
    "Possibly it is not ~y",
    "what is ~x anyway?",
    "what is ~y anyway?",
  ],
  "~*x are you ~*y": [
    "Why are you interested in whether I am ~y or not?",
    "Would you prefer if I weren't ~y ?",
    "Perhaps I am ~y in your fantasies.",
  ],
  "~*x you are ~*y": [
    "What makes you think I am ~y?",
  ],
  "~*x because ~*y": [
    "Is that the real reason?",
    "What other reasons might there be?",
    "Does that reason seem to explain anything else?",
  ],
  "~*x were you ~*y": [
    "Perhaps I was ~y?",
    "What do you think?",
    "What if I had been ~y?",
  ],
  "~*x I can't ~*y": [
    "Maybe you could ~y now",
    "What if you could ~y?",
  ],
  "~*x I feel ~*y": [
    "Do you often feel ~y?"
  ],
  "~*x I felt ~*y": [
    "What other feelings do you have?"
  ],
  "~*x I ~*y you ~*z": [
    "Perhaps in your fantasy we ~y each other",
  ],
  "~*x why don't you ~*y": [
    "Should you ~y yourself?",
    "Do you believe I don't ~y ?",
    "Perhaps I will ~y in good time",
  ],
  "~*x yes ~*y": [
    "You seem quite positive",
    "You are sure?",
    "I understand",
  ],
  "~*x someone ~*y": [
    "Can you be more specific?",
  ],
  "~*x everyone ~*y": [
    "Surely not everyone",
    "Can you think of anyone in particular?",
    "Who, for example?",
    "You are thinking of a special person",
  ],
  "~*x always ~*y": [
    "Can you think of a specific example?",
    "When?",
    "What incident are you thinking of?",
    "Really--always?",
  ],
  "~*x what ~*y": [
    "Why do you ask?",
    "Does that question interest you?",
    "What is it you really want to know?",
    "What do you think?",
    "What comes to your mind when you ask that?",
  ],
  "~*x perhaps ~*y": [
    "You do not seem quite certain",
  ],
};

var default_responses = [
  "Very interesting",
  "I am not sure I understand you fully",
  "What does that suggest to you?",
  "Please continue",
  "Go on",
  "Do you feel strongly about discussing such things?",
];

function choice(lst) {
  var i = Math.floor(Math.random() * lst.length);
  return lst[i];
}

function interact() {
  /* Have a conversation with a user.
   * Read a line, process it, and display the results.*/
  var q = document.getElementById("query");
  if (q.value.length === 0) return; 
  var response = respond(remove_punct(q.value.toLowerCase()));
  response = response[0].toUpperCase() + response.slice(1); //capitalize first letter
  var r = document.getElementById("responses");
  
  var t = new Date();
  var t2 = new Date();
  t2.setSeconds(t2.getSeconds() + 2);
  r.innerHTML = " USER &nbsp;[" + t + "]: " + q.value + "<br>" + r.innerHTML ;
  r.innerHTML = " ELIZA [" + t2 + "]: <code>" + response + "</code><br>" + r.innerHTML ;
  q.value = "";
}

function respond(input) {
  input = tokenize(input); // match_pattern expects a list of tokens
  
  // Look through rules and find input patterns that matches the input.
  var matching_rules = [];
  for (var pattern in rules) {
    var transforms = rules[pattern];
    pattern = tokenize(pattern.toLowerCase());
    replacements = match_pattern(pattern, input);
    if (replacements) matching_rules.push([transforms, replacements]);
  }

  // When rules are found, choose one and one of its responses at random.
  // If no rule applies, we use the default rule. 
  var replacements = {};
  var response = "";
  if (matching_rules.length > 0) {
    var match = choice(matching_rules);
    var responses = match[0];
    replacements = match[1];
    response = choice(responses);
  } else {
    response = choice(default_responses);
  }

  // Replace the variables in the output pattern with the values matched from
  // the input string.
  for (var variable in replacements) {
    var replacement = replacements[variable];
    replacement = switch_viewpoint(replacement).join(' ');
    if (replacement) response = response.replace('~' + variable, replacement);
  }

  return response;
}

function match_pattern(pattern, input, bindings){
  /*
   * Determine if the input string matches the given pattern.
   *
   * Expects pattern and input to be lists of tokens, where each token is a word
   * or a variable.
   *
   * Returns a dictionary containing the bindings of variables in the input
   * pattern to values in the input string, or False when the input doesn't match
   * the pattern.
   */
  
  if (bindings === undefined) bindings = {};
  // Check to see if matching failed before we got here.
  else if (bindings === false) return false;

  // When the pattern and the input are identical, we have a match, and
  // no more bindings need to be found.
  // BUGGY IN JAVASCRIPT
  if (JSON.stringify(pattern)== JSON.stringify(input)) return bindings;

  // Match input and pattern according to their types.
  if (is_segment(pattern)){
    var token = pattern[0];     // segment variable is the first token
    // segment variable is of the form ?*x
    return match_segment(token.slice(2), pattern.slice(1), input, bindings);
  }
  else if (is_variable(pattern)){
    // single variables are of the form ?foo
    return match_variable(pattern.slice(1), [input], bindings);
  }
  else if (contains_tokens(pattern) && contains_tokens(input)){
    // Recurse:
    // try to match the first tokens of both pattern and input.  The bindings
    // that result are used to match the remainder of both lists.
    return match_pattern(pattern.slice(1),
                         input.slice(1),
                         match_pattern(pattern[0], input[0], bindings));
  }
  else{
    return false;
  }
}
  
function match_segment(v, pattern, input, bindings, start){
  /*
   * Match the segment variable against the input
   *
   * pattern and input should be lists of tokens.
   *
   * Looks for a substring of input that begins at start and is immediately
   * followed by the first word in pattern.  If such a substring exists,
   * matching continues recursively and the resulting bindings are returned;
   * otherwise returns False.
   */

  if (start === undefined) start = 0;

  // If there are no words in pattern following var, we can just match var
  // to the remainder of the input.
  if (pattern.length === 0) return match_variable(v, input, bindings);

  // Get the segment boundary word and look for the first occurrence in
  // the input starting from index start.
  var word = pattern[0];
  var p = input.slice(start).indexOf(word);
  if (p === -1) return false;
  else pos = start + p;
 
  // Match the located substring to the segment variable and recursively
  // pattern match using the resulting bindings.
  var var_match = match_variable(v, input.slice(0, pos), bindings);
  var match = match_pattern(pattern, input.slice(pos), var_match);

  // If pattern matching fails with this substring, try a longer one.
  if(!match) return match_segment(v, pattern, input, bindings, start + 1);
    
  return match;
}

function match_variable(v, replacement, bindings){
  /* Bind the input to the variable and update the bindings.*/
  if (!(v in bindings)){
    // The variable isn't yet bound.
    bindings[v] = replacement;
    return bindings;
  }
  if (replacement === bindings[v]){
    // The variable is already bound to that input.
    return bindings;
  }
  // The variable is already bound, but not to that input--fail.
  return false;
}

// Pattern matching utilities

function contains_tokens(pattern) {
  /* Test if pattern is a list of subpatterns. */
  return Array.isArray(pattern) && pattern.length > 0;
}

function only_letters(c){
  /* Test if c is a letter. */
  return /[a-zA-Z]/.test(c);
}

function tokenize(s){
  /* Split a string into a list of tokens based on whitespace. */
  return s.split(/\b\s+(?!$)/);
}

function is_variable(pattern) {
  /* Test if pattern is a single variable. */
  return (typeof pattern === 'string' || pattern instanceof String) && 
         pattern[0] === '~' &&
         pattern.length > 1 &&
         only_letters(pattern[1]) && 
         !pattern.includes(' ');
}

function is_segment(pattern) {
  /* Test if pattern begins with a segment variable.*/
  return Array.isArray(pattern) &&
         pattern.length > 0 &&
         pattern[0].length > 2 && 
         pattern[0][0] === '~' &&
         pattern[0][1] === '*' &&
         only_letters(pattern[0][2]) && 
         !pattern[0].includes(' ');
}

function switch_viewpoint(words) {
  /* Swap some common pronouns for interacting with a robot. */
  var replacements = {'i': 'you', 'you': 'I', 'me': 'you',
                      'my': 'your', 'am': 'are', 'are': 'am'};
  var result = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    result.push(replacements[word] || word);
  }
  return result;
}

function remove_punct(string) {
  /* Replace non letters with spaces.*/
  return string.replace(/[^A-Za-z_]/g, " ");
}

document.getElementById("query").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
});

