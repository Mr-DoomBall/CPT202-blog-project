export const dummyUserInfo = { id: '001', name: 'Toby', avatar: 'https://t7.baidu.com/it/u=848096684,3883475370&fm=193&f=GIF' };

export const dummyUsers = [
    { id: '002', name: 'Peter', avatar: 'https://t7.baidu.com/it/u=848096684,3883475370&fm=193&f=GIF' },
    { id: '003', name: 'Json', avatar: ' https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201408%2F25%2F20140825211212_LTYB8.jpeg&refer=http%3A%2F%2Fimg5.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649838455&t=00eb76649d9c51f22b8ff91fe61d13c0' }
]

export const dummyChatItems = [
    {
        id: 'messag1',
        userInfo: { id: '001', name: 'Toby', avatar: 'https://t7.baidu.com/it/u=848096684,3883475370&fm=193&f=GIF' },
        master: true,
        content: {
            message: 'Hello',
            date: '2022-3-14'
        }
    },
    {
        id: 'messag2',
        userInfo: { id: '002', name: 'Peter', avatar: 'https://t7.baidu.com/it/u=848096684,3883475370&fm=193&f=GIF' },
        master: false,
        content: {
            message: 'Hi',
            date: '2022-3-14'
        }
    }, {
        id: 'messag3',
        userInfo: { id: '002', name: 'Peter', avatar: 'https://t7.baidu.com/it/u=848096684,3883475370&fm=193&f=GIF' },
        master: false,
        content: {
            message: 'I am Peter',
            date: '2022-3-14'
        }
    }
]