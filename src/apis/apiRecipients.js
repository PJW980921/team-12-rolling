const ROOT_URL = 'https://rolling-api.vercel.app/2-12';

/* ==================== */
// GET
/* ==================== */

async function getRecipients(id = '', queryType = '') {
  const path = id ? `recipients/${id}/` : `recipients/`;
  const query = (() => {
    if (!queryType) return '';
    if (queryType === 'like') return `?limit=16&sort=like`;
    return `?limit=16`;
  })();

  const response = await fetch(`${ROOT_URL}/${path}${query}`);
  if (!response.ok) {
    throw new Error('대상을 불러오는데 실패했습니다.');
  }
  const body = await response.json();

  return body;
}

async function getRecipientMessages(recipientId) {
  if (!recipientId) {
    throw new Error('불러올 대상을 지정해주세요.');
  }
  const response = await fetch(
    `${ROOT_URL}/recipients/${recipientId}/messages/`
  );
  if (!response.ok) {
    throw new Error('대상을 불러오는데 실패했습니다.');
  }
  const body = await response.json();

  return body;
}

async function getRecipientReactions(id = '') {
  if (!id) {
    throw new Error('불러올 대상을 지정해주세요.');
  }
  const response = await fetch(`${ROOT_URL}/recipients/${id}/reactions/`);
  if (!response.ok) {
    throw new Error('대상을 불러오는데 실패했습니다.');
  }
  const body = await response.json();

  return body;
}

/* ==================== */
// POST
/* ==================== */
async function postRecipients(data) {
  const response = await fetch(`${ROOT_URL}/recipients/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('대상 생성을 하는데 실패했습니다.');
  }
  const body = await response.json();

  return body;
}

async function postMessages(data) {
  const { recipientId } = data;
  const response = await fetch(
    `${ROOT_URL}/recipients/${recipientId}/messages/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error('메세지 생성을 하는데 실패했습니다.');
  }
  const body = await response.json();

  return body;
}

async function postRecipientReactions(data, recipient_id) {
  const response = await fetch(
    `${ROOT_URL}/recipients/${recipient_id}/reactions/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error('리액션을 생성하는데 실패했습니다.');
  }
  const body = await response.json();

  return body;
}

/* ==================== */
// DELETE
/* ==================== */

async function deleteMessages(id = '') {
  if (!id) {
    throw new Error('삭제 대상을 지정해주세요.');
  }
  const response = await fetch(`${ROOT_URL}/messages/${id}/`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('대상을 삭제하는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

async function deleteRecipient(id = '') {
  if (!id) {
    throw new Error('삭제 대상을 지정해주세요.');
  }
  const response = await fetch(`${ROOT_URL}/recipients/${id}/`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('대상을 삭제하는데 실패했습니다.');
  }
}

export {
  getRecipients,
  getRecipientMessages,
  getRecipientReactions,
  postRecipients,
  postMessages,
  postRecipientReactions,
  deleteMessages,
  deleteRecipient,
};
