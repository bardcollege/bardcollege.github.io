/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * Bard L&T
 * Strachey & Turing's Love Letter Generator.
 * based on: http://www.gingerbeardman.com/loveletter/
 */

var 
  salutations1 = ["BELOVED", "DARLING", "DEAR", "DEAREST", "FANCIFUL", "HONEY"],
    
  salutations2 = ["CHICKPEA", "PUMPKIN", "DEAR", "DUCK", "JEWEL", "LOVE", "MOPPET", "SWEETHEART", "HONEYSUCKLE"],

  adverbs = ["AFFECTIONATELY", "ARDENTLY", "ANXIOUSLY", "BEAUTIFULLY", 
             "BURNINGLY", "COVETOUSLY", "CURIOUSLY", "EAGERLY", "FERVENTLY", 
             "FONDLY", "IMPATIENTLY", "KEENLY", "LOVINGLY", "PASSIONATELY", 
             "SEDUCTIVELY", "TENDERLY", "WISTFULLY", ""],

  adjectives = ["AFFECTIONATE", "AMOROUS", "ANXIOUS", "AVID", "BEAUTIFUL", 
                "BREATHLESS", "BURNING", "COVETOUS", "CRAVING", "CURIOUS", 
                "EAGER", "FERVENT", "FONDEST", "LOVEABLE", "LOVESICK", 
                "LOVING", "PASSIONATE", "PRECIOUS", "SEDUCTIVE", "SWEET", 
                "SYMPATHETIC", "TENDER", "UNSATISFIED", "WINNING", "WISTFUL", ""],

  nouns = ["ADORATION", "AFFECTION", "AMBITION", "APPETITE", "ARDOUR", "BEING",
           "BURNING", "CHARM", "CRAVING", "DESIRE", "DEVOTION", "EAGERNESS", 
           "ENCHANTMENT", "ENTHUSIASM", "FANCY", "FELLOW FEELING", "FERVOUR", 
           "FONDNESS", "HEART", "HUNGER", "INFATUATION", "LITTLE LIKING",
           "LONGING", "LOVE", "LUST", "PASSION", "RAPTURE", "SYMPATHY", 
           "THIRST", "WISH", "YEARNING"],

  verbs = ["ADORES", "ATTRACTS", "CLINGS TO", "HOLDS DEAR", "HOPES FOR", 
           "HUNGERS FOR", "LIKES", "LONGS FOR", "LOVES", "LUSTS AFTER", 
           "PANTS FOR", "PINES FOR", "SIGHS FOR", "TEMPTS", "THIRSTS FOR",
           "TREASURES", "YEARNS FOR", "WOOS"];

function choose(lst){
  var i = Math.floor(Math.random() * lst.length);
  return lst[i];
}

var msg = document.body;

msg.innerHTML = choose(salutations1) + " " + choose(salutations2) + "," + "<p>";

for (var i = 0; i < 5; i = i + 1){
  if (choose(['heads', 'tails']) === 'heads'){
     msg.innerHTML += "MY " + 
                      choose(adjectives) + " " + 
                      choose(nouns) + " " + choose(adverbs) + " " + 
                      choose(verbs) +  " YOUR " + 
                      choose(adjectives) + " " + choose(nouns) + ". "; 
  }
  else{
     msg.innerHTML += "YOU ARE MY " + 
                      choose(adjectives) + " " + choose(nouns) + ". ";
  }
}

msg.innerHTML += "<p>YOURS " + choose(adverbs) + ",<p>M.U.C";
