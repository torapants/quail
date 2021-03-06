/**
 * @todo Needs refinement.
 *
 * A simple test case that determines if elements, specified by a selector,
 * exist or not.
 *
 * The test fails for elements that are found and a case is created for each
 * one. The test passes is the selector finds no matching elements.
 */
var Case = require('Case');
const DOM = require('DOM');

var NoembedHasEquivalentContent = {
  run: function (test, options) {

    var selector = 'noembed';

    test.get('scope').forEach(function (scope) {
      var candidates = DOM.scry(selector, scope);
      if (!candidates.length) {
        test.add(Case({
          element: undefined,
          status: (options.test ? 'inapplicable' : 'passed')
        }));
      }
      else {
        candidates.forEach(function (element) {
          var status;

          // If a test is defined, then use it
          if (options.test && !DOM.is(element, options.test)) {
            status = 'passed';
          }
          else {
            status = 'failed';
          }

          test.add(Case({
            element: element,
            status: status
          }));
        });
      }
    });
  },

  meta: {
    testability: 0,
    title: {
      en: 'Noembed elements must be the same content as their \"embed\" element',
      nl: 'Noembed-elementen moeten dezelfde content hebben als hun \"embed\"-element'
    },
    description: {
      en: 'All <code>noembed</code> elements must contain or link to an accessible version of their <code>embed</code> counterparts.',
      nl: 'Alle <code>noembed</code>-elementen moeten een toegankelijke versie van hun <code>embed</code>-tegenhangers bevatten of hier naar linken.'
    },
    guidelines: [

    ],
    tags: [
      'objects',
      'content'
    ]
  }
};
module.exports = NoembedHasEquivalentContent;
