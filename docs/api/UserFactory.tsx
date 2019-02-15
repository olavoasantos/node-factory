// tslint:disable
import React from 'react';
import { factory } from '../../index';

const UserFactory = factory(fake => ({
  id: fake.random.uuid(),
  name: fake.name.findName(),
  email: fake.internet.email(),
}));

function syntaxHighlight(json) {
  const styles = {
    number: 'color: #3490DC',
    key: 'color: #6CB2EB',
    string: 'color: #3490DC',
    boolean: 'color: #621B18',
    null: 'color: #E3342F',
  };

  if (typeof json != 'string') {
       json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
          if (/:$/.test(match)) {
              cls = 'key';
          } else {
              cls = 'string';
          }
      } else if (/true|false/.test(match)) {
          cls = 'boolean';
      } else if (/null/.test(match)) {
          cls = 'null';
      }
      return '<span style="' + styles[cls] + '">' + match + '</span>';
  });
}

export default ({ parse }) => (
  <pre style={{
    background: '#EEF1F5',
    borderLeft: '5px solid #CED4DE',
    color: '#7D899C',
    margin: '-30px 0 25px 2px',
    padding: '20px',
    fontStyle: 'italic',
    fontSize: '18px',
  }} dangerouslySetInnerHTML={{ __html: syntaxHighlight(parse(UserFactory)) }} />
);
