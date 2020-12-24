// pages/summary/summary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    summary2020:[
     {time:"2020/12/17 14:24:53",
   name:"iris",
   age:"90后",
   learn:"语言学＋经济学入门",
   certificate:"没有",
   read:"好像没怎么看书",
   change:"考研成功啦！",
   city:"去北京上学算吗",
   sport:"没怎么运动…",
   people:"自己吧",
  },{time:"2020/12/17 10:47:07",
   name:"雪珂",
   age:"90后",
   learn:"学习了access、SQL数据库",
   certificate:"没有",
   read:"10本，推荐心理罪、七堂极简物理课",
   change:"30岁了，结婚啦",
   city:"疫情影响，没去哪。陪我妈逛逛街也挺好的。",
   sport:"被单位逼着爬了秦岭野山",
   people:"钟南山",
  },{time:"2020/12/17 10:03:34",
   name:"clover",
   age:"90后",
   learn:"小组学习内容有：\nPython爬虫入门、MySQL数据库、Excel进阶、PPT进阶\n个人自学内容有:\n人力资源管理、心理学、项目管理、英语语法、日语N3、烘焙、减脂餐搭配",
   certificate:"日语N3：自我感觉挑战失败……",
   read:"看完21本；推荐《金子塔原理》、《麦肯锡教我的工作方法》、《向上管理：如何正确汇报工作》、《高效能人士的七个习惯》、《如何让你爱的人爱上你》……",
   change:"规律的早起习惯、尝试自己做早午餐",
   city:"旅游：在11月底至12月初去往杭州、嘉兴、苏州、上海~领略江南水乡的风格特色，亦体验魔都大城市的人文风情",
   sport:"①每天坚持30个俯卧撑（我有胸肌啦）\n②9-10-11月份的腹肌计划（身体素质变好）",
   people:"小组的伙伴都有不同的闪光点而又一致的行为习惯：代表为grit、空调、洋阳三支柱",
  },{time:"2020/12/17 9:13:15",
   name:"Gina",
   age:"80后",
   learn:"学了会计，学了证券，虽然一门弃考，一门差两分，但是还是不错的。",
   certificate:"考了，没过。",
   read:"看了几本教材。",
   change:"户口搞定，买房，装修。",
   city:"常州，霞浦，济南",
   sport:"健走了一个月",
   people:"暂无",
  },{time:"2020/12/17 8:04:32",
   name:"Sally Cui",
   age:"80后",
   learn:"学习做英语老师，在培训机构兼职做初中英语老师，给学生补课。",
   certificate:"报名了CATTI口译，可是没去考",
   read:"跟着翻译群看了几本书",
   change:"没什么大改变，就是多了几个学生",
   city:"新冠疫情，哪里也没去",
   sport:"没有运动计划，还是不爱运动啊！",
   people:"Neil Wang",
  },{time:"2020/12/17 7:52:48",
   name:"万巧书",
   age:"90后",
   learn:"python，PPT，可能还有别的吧，我忘了……",
   certificate:"OB初级，翻译三笔(不知道过没过……)",
   read:"平均下来大概三天一篇，都是同人小说，虽然其中不乏出色的，但是要看原作还很考验作者，而且好像大家都不怎么喜欢的样子_(:з)∠)_\n我看同人是因为，同一人物，同一背景的大世界，只要发生稍许改变，就能走向另一个结局。这种“可能性”令我非常着迷！！",
   change:"过了复试进了研究生",
   city:"宅女不需出门就能阅遍天下风景！(有空的时候疫情严重哪也没去)",
   sport:"开学前锻炼俩月身体吧……虽然一斤没减下来_(:з)∠)_吃的太快乐了",
   people:"当然是洋阳。洋阳讲的python，复试的时候面试问问题问什么忘了，但是我说“假期自己学了python”，老师还就python问了两句我都答上来了，我觉得肯定提高了老师印象，不然我面试分不能那么高哈哈哈\n而且！！很多时候我都是口头花花，是洋阳带着我(们)一起学的！！特别感谢洋阳大佬！！\n昨天看了大佬的年度总结，我要吹爆洋阳！\n其他大佬也帮了我很多，比如空调，胖虎，……还有单字很难打的那个姐姐，还有很多很多其他人，谢谢大佬们！",
  },{time:"2020/12/16 22:13:40",
   name:"图图妈妈",
   age:"90后",
   learn:"",
   certificate:"",
   read:"窗边的小豆豆",
   change:"从事教学，获得优秀个人，所带的班级第一。",
   city:"",
   sport:"",
   people:"",
  },{time:"2020/12/16 19:08:20",
   name:"周六六",
   age:"90后",
   learn:"语法新思维😂",
   certificate:"本来有的，然而…疫情让我考不了😂 要变成来年计划了",
   read:"看书的上半年…下半年的我…淹没在工作微信号里了",
   change:"一个人干所有家务变成了，只需要干一半家务😆",
   city:"海边小村子真是个与世独立的好地方，就是方言听不懂，唉",
   sport:"木有计划😂",
   people:"小哥哥☺️",
  },{time:"2020/12/16 16:13:44",
   name:"hiko",
   age:"90后",
   learn:"建筑专业的知识",
   certificate:"没有 但是在备考二建",
   read:"二建的书 法规 工程管理 建筑",
   change:"没有",
   city:"毛泽东故居",
   sport:"跑步",
   people:"一位前辈",
  },{time:"2020/12/16 14:16:22",
   name:"洋阳",
   age:"90后",
   learn:"技能方面，学习了PPT进阶、SQL入门、微信小程序入门\n艺术方面，学习了Procreate，坚持练字，英文小有成效，中文入门了瘦金体\n厨艺方面，学习了做面包、蛋糕、三明治、奶油小方、曲奇、雪花酥",
   certificate:"没",
   read:"阅读30本+，年度推荐《你当像鸟飞往你的山》、《成为》、《绝叫》",
   change:"生活步入正轨，学习有了规划。开始断舍离的生活，把家里照顾的比较好。当然工作也表现不错，嘿嘿",
   city:"因为出差的关系，去了常州、宁波、广西、杭州、苏州。\n并没有出去旅游，但是和老公打卡了几家博物馆和公园。",
   sport:"跑步完成100km",
   people:"依旧觉得是群里的小伙伴，包括空调、课代表、冬冬、Abbey，Grit等等，最打动我的不是他们都很厉害，很努力学习这些。而是他们直面生活、热爱生活，给了我很大的力量。",
  },{time:"2020/12/16 12:40:04",
   name:"热心网友花开富贵",
   age:"90后",
   learn:"业务方面：算是被本专业彻底抛弃（整个技术部门直接撤掉，办公桌直接给我搬到人事科），学习到人事档案审核、干部任用提拔、十九届各中全会精神，或许还有一点点的人员管理和协调能力；\n其他方面：python入门（我其实入了很多次），今日头条分享读书笔记、影视浅析、生活感悟拿到黄v（是参加活动走的内部评审通道，拿到黄v300多粉丝后就没有继续更了），ppt入门中，mysql入门中，procreate继续入门中，重新买基金（风口的猪，还没有亏……）",
   certificate:"考了三笔，成绩未知，可能……会过吧（裸考还迷之自信，算了，安慰一下自己……）",
   read:"",
   change:"周围环境变得复杂，我以前真的是个弟弟，只听说社会复杂人心险恶，今年见到真的了……\n没有去年焦虑，可能是因为忙碌“充实”了……\n生活上消费降级，在物质方面断舍离了很多，这很好，省钱省心省时间！",
   city:"",
   sport:"",
   people:"一个或者说一群自己工作不好好干，只想推给我让我背锅的人\n感悟：人要有独立的意识和明辨是非的能力，要有分寸感和界限感，要学会估值（有的人就根本不配你的帮助和看重）\n戾气好重，可是我再也回不到过去了，我脏了，呜呜呜……",
  },{time:"2020/12/16 12:13:11",
   name:"🌸花漾",
   age:"90后",
   learn:"1. 学习了OR AU AE剪辑三位一体课程\n2. 学习了POWER BI数据分析课程\n3. 学习SQL基础课程",
   certificate:"无",
   read:"今年通过微信读书，听了12本书，《遇见未知的自己》《他和她》《星星上的人》《造彩虹的人》《局外人》《守望之心》《岛上书店》《追风筝的人》《沉睡的人鱼之家》《放学后》《如父如子》《高山上的小邮局》",
   change:"2020年10月，怀上了小baby，明年7月份的预产期~\n2020年10月，度过了自己30岁的生日，平平淡淡的一天，却让我想了很多，明白未来努力的方向~\n2020年，通过学习，找到了我的热爱---数据分析~\n2020年，第一次坚持扇贝打卡全勤1整年（虽然2020年还有10多天，但是我相信我会全勤的）~虽然已经在扇贝打卡1500➕了，但这是第一次全年全勤，每天的坚持对我的影响很大，把简单的小事坚持做好，遇到复杂的事也不会害怕，坚持做下去，总能看到质变。",
   city:"2019年在苏州定居，和老公两个人打理我们的小日子，每个月努力赚钱还房贷，保持经济独立",
   sport:"曾经备孕坚持1个月每天跑步5km，后换成每天跳绳3000个~因为吃叶酸导致身体异常，姨妈异常，一开始不知道是叶酸的问题，还以为是运动过度导致的，便停掉了运动，变成每天散步了（小声BB：叶酸会影响姨妈，还可能会导致身体内分泌紊乱）",
   people:"我们老板。我们公司是一家不大的私营企业，老板和同事们都很奈斯，尤其是老板。他尊重员工，不要求员工下班回消息，认为员工下班后的时间属于私人时间，不应该用来工作。他以身作则，非常敬业，每天6点到公司，4点多下班，回家陪孩子上补习班踢足球等，时间管理能力非常强。他尊重员工隐私，有事找员工时，从来不会到员工工位上，都是离的2米距离和员工说话，不会看员工电脑屏幕。他生活中是非常有情调的人，把这份情调也带到了工作中，每次签下了大客户，他都会开瓶红酒和员工共享庆祝~另外，每年春节开工，他都会给员工写一封信，总结去年他的努力和成果，并分享他的好的工作习惯或者时间管理经验等，并规划新的一年我们的目标，我们该怎么做，以及一些挑战。会给每一个员工都有规划，并且提供激励政策。总之，我和我的同事们都被老板这样感染，大家慢慢都像老板一样，变成专注而积极热情的人",
  },{time:"2020/12/16 11:38:31",
   name:"北望",
   age:"80后",
   learn:"跟着小组学了PPT和EXCEL，有些操作生疏了。开始学素描，希望坚持下去。",
   certificate:"证券从业通过、基金从业资格考试通过一门。",
   read:"看了十几本。《写给大家看的设计书》、Becoming",
   change:"娃上小学了",
   city:"依然包邮区",
   sport:"年跑量500KM，将达成。",
   people:"老婆大人和向神兽蜕变的娃。",
  },{time:"2020/12/16 11:27:10",
   name:"空调",
   age:"80后",
   learn:"无所得",
   certificate:"没有……",
   read:"十二本，推荐人类简史，简史三部曲",
   change:"父母搬来同住，老婆升职变忙了",
   city:"因为疫情，没有出门",
   sport:"只有跑量500KM",
   people:"我儿子，为了培养良好习惯，天天和他一起看书",
  },{time:"2020/12/16 11:12:55",
   name:"丽妮立黎里",
   age:"80后",
   learn:"今年时间贡献给考试了，没学啥新的。ppt都没好好学。倒是把党章党规党史好好学了一遍。",
   certificate:"我有初级社工证，中级今年没考了，因为我考上公务员了。⊙▽⊙",
   read:"党章，新形势下党内生活若干规定，支部工作条例，民法典……",
   change:"大宝上初中，小宝换校区。",
   city:"出差了几个城市，没有机会出去玩",
   sport:"每天10000+，没有计划",
   people:"党",
  },{time:"2020/12/16 10:46:44",
   name:"卖烤鱼点灰",
   age:"80后",
   learn:"宏观角度看企业运营",
   certificate:"无",
   read:"4本，推荐吴军的《智能时代》了解科技趋势。南怀瑾《金刚经说什么》比所有市面上的幸福学都好",
   change:"运动更规律。2km跑已无压力",
   city:"疫情期间禁止旅行",
   sport:"核心提升",
   people:"吴军，鸠摩罗什",
  },{time:"2020/12/16 10:28:48",
   name:"zangzang",
   age:"90后",
   learn:"跟着小组学了一点ppt",
   certificate:"没有，只想考研成功",
   read:"都是辅导书就算了吧-_-||",
   change:"前半年是猪一样的生活，后半年是狗一样的生活。",
   city:"没啦",
   sport:"没啦",
   people:"我的一个研友，早睡早起，超级自律，有段时间一直相互督促，希望我们都能成功上岸。",
  },{time:"2020/12/16 10:26:38",
   name:"妤苒",
   age:"90后",
   learn:"专业知识吧",
   certificate:"住培证",
   read:"4本，两京十五日，哈利波特系列",
   change:"又单身了",
   city:"黄山好美",
   sport:"开始健身",
   people:"ex吧，生活打乱重新开始",
  },{time:"2020/12/16 10:13:24",
   name:"莲",
   age:"80后",
   learn:"一周进步ppt训练营/如何做年终总结ppt课\n练字136天(8-12月)\n流程管理(工作)",
   certificate:"",
   read:"8本 斗罗大陆 绝世唐门 庆余年",
   change:"",
   city:"浙江影视城 新圆明园",
   sport:"倒立，坚叉 1.2.3.4月跑100公里计划",
   people:"儿子",
  },{time:"2020/12/16 9:46:41",
   name:"Angela亲妈",
   age:"80后",
   learn:"泰腐圈文化",
   certificate:"考了，还是没考到",
   read:"没有完整的看什么新书，倒是开始回味郭敬明",
   change:"没什么改变，是我喜欢的状态",
   city:"去了莫干山",
   sport:"没有任何运动计划，最大的运动就是遛Angela",
   people:"我的领导，一个业务能力超强，和我一样嗑cp，从工作到生活都关心下属的大美妞。",
  },{time:"2020/12/16 9:27:14",
   name:"梁子",
   age:"80后",
   learn:"无",
   certificate:"无",
   read:"统计了一下英文阅读，完成18本，有的比较短，这样算起来平均一个月一本\nDestined for War,\nThe Wonderful Wizard of Oz,\nHarry Potter and the Cursed Child,\nDestiny Disrupted,\nHarry Potter and the Prisoner of Azkaban,\nCakes and Ale,\nFar from the Madding Crowd,\nAfter the Baptism •中文书的英译本,\nHoles•,\nThrough the Looking Glass,\nAnthem•,\nThe Kite Runner,\nWhy We Sleep,\nBrief Answers of the Big Questions,\nThe Mamba Mentality,\nReunion•,\nEverything I Never Told You,\nOld Man's War.",
   change:"小朋友一年级了，我终于换了工作",
   city:"无",
   sport:"惭愧，立了无数FLAG，都没完成",
   people:"无",
  },{time:"2020/12/16 9:06:06",
   name:"小小小不停",
   age:"80后",
   learn:"会做了好多家常菜",
   certificate:"",
   read:"44本 《罪与罚》《悲惨世界》《美丽新世界》《那不勒斯四部曲》《血疫》",
   change:"",
   city:"年初去了西班牙葡萄牙旅游",
   sport:"",
   people:"",
  },{time:"2020/12/16 9:01:48",
   name:"莱拉Laila",
   age:"90后",
   learn:"闽南语、日语、西夏艺术、古罗马建筑",
   certificate:"Nope",
   read:"31本，推荐白先勇的《台北人》以及黑塞的《悉达多》",
   change:"翻译完了一本书；开了公众号；开始画画；生活更加规律，更爱惜自己的身体。",
   city:"疫情的原因宅在家里，各种美景虽不能至，心向往之。",
   sport:"骑行1000km达成",
   people:"硬要说的话，就是接受了各种信息的自己吧。",
  },{time:"2020/12/16 8:59:50",
   name:"Yolanda",
   age:"90后",
   learn:"德语，国标",
   certificate:"",
   read:"31本，中国人史纲",
   change:"生了俩崽，换了工作",
   city:"苏州，桂林",
   sport:"每天坚持1小时有氧+无氧 生娃后身材迅速恢复还有了腹肌",
   people:"我的老母亲",
  },{time:"2020/12/16 6:37:36",
   name:"Sekoan",
   age:"90后",
   learn:"学了速写，python，ppt，excel",
   certificate:"屡败屡战中过了6级",
   read:"12本，推荐杀死一只知更鸟，老人与海",
   change:"买了房，获得了很多以前没得过也没敢想过的荣誉，在每天都很忙碌的状态中保持积极的状态，遇到了很好的领导",
   city:"拜疫情所赐就在上海郊区转了一下",
   sport:"保持每个工作日中午有一个小时左右的训练",
   people:"洋阳，如太阳一般明亮和温暖的人，也希望自己有一天可以拥有这么好的状态，让身边的人过得更快乐一些",
  },{time:"2020/12/16 0:27:06",
   name:"ice tea",
   age:"90后",
   learn:"隔震支座罕遇地震计算方法；动态采集软件；装配式钢砼十字节点试验方法；桥梁，厂房内部构造，以及动态特性计算方面",
   certificate:"没考上",
   read:"看了好多，短篇三大作家吧，比较深刻",
   change:"更忙了",
   city:"2020 长沙旅游",
   sport:"健身",
   people:"我自己，做好自己比什么都强。",
  }],
  summary2019:[
  {time:"2020/1/2 12:07:03",
   name:"TeresaZhs",
   age:"80后",
   learn:"Python，Access都是会点简单的东西",
   certificate:"木有",
   read:"20本书。洞穴奇案、球状闪电",
   change:"在19年年尾，成为有车一族",
   city:"乌镇。",
   sport:"练了两个月的马甲线，没什么效果，放弃了。",
   people:"小组成员。",
  },{time:"2019/12/31 18:18:48",
   name:"Spring",
   age:"90后",
   learn:"参加了绿带培训，学习了lean-sigma的理论",
   certificate:"去年报名，今年考了个（除了减点税不知道还能干啥的）初级会计专业资格证。",
   read:"看了很多小说。。。但没有记读书笔记，不好意思推荐了",
   change:"看中了个小两居室，然后买下来了。",
   city:"在出差培训吃酒之余，顺便到柳州、苏州、上海、北京逛了逛 ，还是定居在爽爽的贵阳了。",
   sport:"办了健身卡，每周至少去了一次，没有浪费。",
   people:"谢谢卖我房子的房东吧。买到了喜欢的房子，也为此开始要偿还房贷了。",
  },{time:"2019/12/30 22:00:06",
   name:"坚持打卡365",
   age:"80后",
   learn:"每天英语打卡",
   certificate:"😔",
   read:"😔",
   change:"二宝出生",
   city:"😞",
   sport:"椭圆机😥 没完成",
   people:"自己",
  },{time:"2019/12/30 18:39:03",
   name:"已至",
   age:"90后",
   learn:"初次完成向会计的转型，学习了逻辑，重拾了数学，英语继续前行",
   certificate:"初级会计师，银行专业资格",
   read:"课外书没空读",
   change:"比以前更加勤奋努力，梦想的力量无比强大",
   city:"天津，合肥，杭州，成都",
   sport:"春节时期有在运动",
   people:"可能是我自己吧，外界的各种因素全被自己转化成动力",
  },{time:"2019/12/30 17:29:57",
   name:"三京",
   age:"80后",
   learn:"钢琴，法语，marketing",
   certificate:"coursera 在线课程拿到了两门的证书",
   read:"这一年看的书数目不多，每一本都很有收益。推荐英文书Becoming; Educated; The Life-changing magic of tiding up; Eleanor Oliphant is completely fine; This is going to hurt; The tattooist of Auschwitz; 中文书《鱼翅与花椒》、《人类简史》、《那不勒斯四部曲》、《房思琪的初恋乐园》、《非暴力沟通》、《时间的秩序》",
   change:"在成为minimalist的路上有了小进步",
   city:"泰国Huhin、法国、荷兰",
   sport:"每个星期游泳两次，参加fitness class两次",
   people:"minimalist podcast、Marie Kondo",
  },{time:"2019/12/30 16:53:11",
   name:"冬无",
   age:"90后",
   learn:"在学初级会计",
   certificate:"初级会计",
   read:"在看三国演义",
   change:"养成英语打卡，晚上跑步的习惯",
   city:"淄博",
   sport:"跑步连续坚持了两个月了吧算是",
   people:"相亲对象",
  },{time:"2019/12/30 15:51:18",
   name:"王者星宝贝",
   age:"80后",
   learn:"资产评估、法律英语、经济学、投资学、谈判课程",
   certificate:"在努力（还未全部通过）",
   read:"《原则》、《成为》、《写给大家看的设计书》、《今天也要认真穿》、《数学之美》、《逃不开的经济周期》、《海上钢琴师》等等",
   change:"自律成为一种习惯",
   city:"南非、埃塞俄比亚、土耳其、希腊",
   sport:"",
   people:"一起学习的学友们",
  },{time:"2019/12/30 15:21:34",
   name:"王山而",
   age:"90后",
   learn:"公考",
   certificate:"没有",
   read:"没有样",
   change:"思想成熟了很多，会更多方面考虑问题，正在学会沉淀自己",
   city:"冶勒湖，毕棚沟",
   sport:"没有",
   people:"我妈",
  },{time:"2019/12/30 15:08:40",
   name:"Sunny",
   age:"80后",
   learn:"在会计的路上一去不返",
   certificate:"拿到初级证书，中级过了一门会计",
   read:"今年只看了3本书",
   change:"遭遇职场暴力，也获得了许多温暖，在父母的帮助下成了房奴但明年终于也有自己的小窝，单身没有狗依旧老光棍但内心富足也更坚定。",
   city:"去涠洲岛吃了海鲜，去南京看了演唱会，明年想跟朋友去日本，带爸妈再去麻袋。",
   sport:"三天打鱼两天晒网，长了6斤肥肉。",
   people:"小组里奋进的各位大佬，对我的触动很大。很庆幸认识了扇贝，加入了小组。",
  },{time:"2019/12/30 14:58:12",
   name:"玉钊",
   age:"90后",
   learn:"第一次真正意义上接触程序，思考编程\n职场真的有小人",
   certificate:"无",
   read:"不懂不懂得看了五本英文书",
   change:"从象牙塔走向了社会",
   city:"长沙柳州",
   sport:"三次骑行，共百公里",
   people:"群里的兄弟姐妹",
  },{time:"2019/12/30 14:51:04",
   name:"咲颜Jude",
   age:"80后",
   learn:"舞蹈？",
   certificate:"有考挂了",
   read:"看了很多，小说为主，啃了小黄书牡丹亭",
   change:"打开keep的次数少了",
   city:"张家界，长沙，故宫，长城，河北博物院，郑州街舞盛典",
   sport:"跑了一个全马两个半马，但减肥才是终身事业，今年不够努力！",
   people:"韩宇易烊千玺，让我从喜欢到热爱再到亲自跳起来。",
  },{time:"2019/12/30 14:46:57",
   name:"蕾丝就是美",
   age:"90后",
   learn:"司法考试、英语笔译、论文写作",
   certificate:"司法考试（✖️），英语三级笔译（等成绩），英语六级（等成绩）",
   read:"全是专业书",
   change:"变糟了？",
   city:"一直在重庆",
   sport:"没有运动计划",
   people:"没有",
  },{time:"2019/12/30 14:36:38",
   name:"Tarya",
   age:"90后",
   learn:"跑步，跳舞",
   certificate:"报了名，没有去，",
   read:"没看书",
   change:"换了工作",
   city:"广州，澳门，北海，",
   sport:"一个半马，结果腿残了",
   people:"BAI",
  },{time:"2019/12/30 14:35:52",
   name:"北望",
   age:"80后",
   learn:"尴尬了，绞尽脑汁，没想出来",
   certificate:"英语三笔拿了个证。考了二笔，看阅卷老师发挥好不好啦。",
   read:"算上闺女的绘本的话我读了不少（这里发不了表情？！）《中国建筑史》读了一半，The great Gateby读了一半，《理性乐观派》读了一半，最近两三个月读完的有《美的沉思》、《孤独六讲》、《致愤青》、《凶冥十杀阵》、《奇妙量子世界》。其他的想不起来是今年还是去年读的了。不确定哪年读的就不推荐了，就说刚读过的，推荐《孤独六讲》吧。想推荐《致愤青》的，但是觉得读的太匆忙，而且《孤独六讲》更温和些。",
   change:"闺女长大了一岁，慢慢开始被闺女训了。投资了个小房子，我都没记得是几号楼几零几。单位没换，岗位换了，这马上到2020了，直系领导还换了。",
   city:"包邮区又逛了一年。",
   sport:"每月30的跑量目标达到了。前两天参加了羽琪的接力跑，感觉很棒！",
   people:"老婆大人！可惜老婆大人看不到我在这夸她…惆怅…",
  },{time:"2019/12/30 14:20:31",
   name:"艾薇",
   age:"80后",
   learn:"健身，德语入门中，滑板入门中",
   certificate:"没有",
   read:"非暴力沟通",
   change:"更加自由和自信了",
   city:"深圳定居，未出游",
   sport:"腹肌",
   people:"元元，豆豆",
  },{time:"2019/12/30 14:20:04",
   name:"xue gu",
   age:"80后",
   learn:"python基础知识看完了",
   certificate:"",
   read:"24本，非暴力沟通，薛兆丰经济学讲义，活着",
   change:"",
   city:"邮轮游",
   sport:"前半年骑自行车，后半年走路上下班。单程走20mins",
   people:"洋阳：guthub上分享的python编程：从入门到实践，比以前自己买的和网上找的让更适合我，终于坚持看完了第一部分。",
  },{time:"2019/12/30 14:14:17",
   name:"皓水莫负",
   age:"90后",
   learn:"每天都在坚持学习，对经济学，辩论稍微感兴趣，在了解中。",
   certificate:"拿了专八证书，驾驶证",
   read:"看了20几本书，推荐《基督山伯爵》《乱世佳人》",
   change:"变得更独立了，开始戒\"依赖\"",
   city:"毕业旅行去了泰国",
   sport:"运动是我的天敌，能躺着就绝不站着",
   people:"我表哥吧，励志人物。毕业一年就自己买了车，向优秀人物看齐，要努力生活啊！",
  },{time:"2019/12/30 14:12:57",
   name:"丽妮立黎里",
   age:"80后",
   learn:"",
   certificate:"社工证",
   read:"扇贝读书的哈利波特与魔法石，野性的呼唤，地球上好玩的地方，廊桥遗梦",
   change:"没什么改变哦，还是上级领导调研，检查……",
   city:"搬新家",
   sport:"没有哦。但是每天步数20000+",
   people:"老公",
  },{time:"2019/12/30 14:07:29",
   name:"爱笑的小太阳",
   age:"70后",
   learn:"学会了做生煎饺子不知道算不算",
   certificate:"裸考教师证，没考过算不算",
   read:"24本。《刺》《人设》《时光倒流的女孩》《少有人走的路》《他其实不是很喜欢你》《新参者》",
   change:"依旧单身",
   city:"去了成都10天。青城山，都江堰，峨眉山，乐山大佛，九寨沟，黄龙，黄龙溪。",
   sport:"每周4-5天郑多燕三十分钟",
   people:"洋阳",
  },{time:"2019/12/30 14:02:25",
   name:"Emma",
   age:"80后",
   learn:"保密",
   certificate:"一个",
   read:"中国是部金融史",
   change:"变化忽略不计",
   city:"泰国",
   sport:"跑步",
   people:"没有",
  },{time:"2019/12/30 13:59:46",
   name:"清晓",
   age:"80后",
   learn:"项目管理",
   certificate:"无",
   read:"应该有10本吧，推荐《遇见未知的自己》",
   change:"在上海买了房，小孩上幼儿园了",
   city:"没有旅游，在上海定居",
   sport:"无",
   people:"群里的小伙伴，都是充满正能量的，对我都有激励作用",
  },{time:"2019/12/30 13:57:32",
   name:"shaw",
   age:"90后",
   learn:"CFD、FEM",
   certificate:"没有",
   read:"活着",
   change:"学业为重",
   city:"在成都闲着，哪里也没去",
   sport:"完成10Km，突破12KM",
   people:"洋阳",
  },{time:"2019/12/30 13:52:28",
   name:"空调",
   age:"80后",
   learn:"python，TPM，PMP 都在学习中",
   certificate:"线上半马2次？",
   read:"三体，红楼梦，乌合之众，亮剑，我的团长我的团，活着等等，在看庆余年，推荐还是看红楼",
   change:"坚持学习，打卡一天没断过，坚持运动，年跑量500翻倍，减重10斤，买了二套房",
   city:"去了上海，苏州，武汉，都是出差",
   sport:"数个月的50公里跑量，2个半马",
   people:"洋阳，像我展示了，什么叫比你优秀的人还比你努力",
  },{time:"2019/12/30 13:47:54",
   name:"Vi7",
   age:"80后",
   learn:"了解了如何做公众号，但还不精通；在Ins上学了很多手帐技巧，准备迎接手帐第五年；以及…和T2娃进阶斗智斗勇！",
   certificate:"无",
   read:"共12本，推荐《海边的卡夫卡》和《钟表工的女儿》。",
   change:"怀了二胎，晋升二胎妈妈！",
   city:"去了澳门、香港、和日本。",
   sport:"无",
   people:"Ins上的一位手帐同人。",
  },{time:"2019/12/30 13:47:12",
   name:"吹雪",
   age:"80后",
   learn:"没有，哭",
   certificate:"没有，再哭",
   read:"看了十本吧",
   change:"坚持打卡，几乎一天不落",
   city:"家里蹲",
   sport:"学了几个月钢管舞，纯粹摸鱼",
   people:"不知道，感觉我已与世界脱节",
  },{time:"2019/12/30 13:42:13",
   name:"冬冬",
   age:"90后",
   learn:"Java基础语法、基础会计知识还有一些行业业务知识",
   certificate:"中级经济师到手，二级口译证书扑街",
   read:"啃掉了菲兹杰拉德的《了不起的盖茨比》，还是没有养成阅读原版书的习惯，泛读速度也很慢，只能定时定量每天一章读下去。最近在挑战阅读《冰与火之歌》。推荐喜欢玄幻的孩子看江南的《龙族》。",
   change:"好像没有",
   city:"台北玩耍了一圈，不好玩的~下次还是要去风景好的地方玩耍",
   sport:"运动比较少....睡眠也总是不太够的样子，因为总是睡眠不够更加不敢运动...怕猝死....求有运动习惯的小伙伴支招",
   people:"没有",
  },{time:"2019/12/30 13:39:45",
   name:"把酒言欢",
   age:"80后",
   learn:"英语",
   certificate:"没考",
   read:"平凡的世界",
   change:"越来越穷了",
   city:"贵州",
   sport:"都没完成",
   people:"没有",
  },{time:"2019/39/30 13:39:22",
   name:"洋阳",
   age:"90后",
   learn:"学习了Python，能爬虫，构建一个网站",
   certificate:"今年没考证",
   read:"看了41本书。推荐《无声告白》和《奇迹男孩》",
   change:"今年换了一份工作，不再加班，生活变得很轻松愉快",
   city:"今年去了香港迪士尼，做了一回小公主。搬家回了上海，以后定居这里。",
   sport:"运动今年懈怠了，来年再战！",
   people:"我觉得是群里的小伙伴，有Grit、空调、Gina等等，学习之路，有人陪伴，一路前行很愉快",
  },{time:"2019/12/30 13:37:53",
   name:"张点点",
   age:"80后",
   learn:"并没有",
   certificate:"并没有",
   read:"正经书看了74本，墙裂推荐毕飞宇的《推拿》",
   change:"脾气收敛了一点点",
   city:"西安已经提上日程",
   sport:"一直是嘴在动🙃",
   people:"班长洋阳现在是我女神",
  },{time:"2019/12/30 13:36:05",
   name:"晴晴",
   age:"90后",
   learn:"一条ex公式",
   certificate:"在考，要考11科，今年报名2科过了1科",
   read:"没看书……",
   change:"嫁人了……",
   city:"惠州，香港。从广州搬回n线城市定居",
   sport:"没有计划，就没有行动哈哈哈",
   people:"老公，跟他一起后情绪化严重了",
  },{time:"2019/12/30 13:27:30",
   name:"蘑菇",
   age:"90后",
   learn:"医学英语",
   certificate:"两个",
   read:"挺多，推荐《遇见未知的自己》《当下的力量》",
   change:"养成了每天学习的习惯",
   city:"南京，杭州",
   sport:"一个月下午跑步，然后就没有然后了",
   people:"一个小姐姐，一起看书学习",
  },{time:"2019/12/30 13:26:37",
   name:"Cleo",
   age:"80后",
   learn:"Sadly, no",
   certificate:"nooooo",
   read:"14本，谈修养；育儿手册；李光耀观天下",
   change:"学着做一个好妈妈，做一个对宝宝有正面影响的妈妈",
   city:"没有旅游，出差的地方还挺多",
   sport:"完成腰部理疗，开始正常健身",
   people:"my baby girl",
  },{time:"2019/12/30 13:25:13",
   name:"鲸落",
   age:"90后",
   learn:"做实验，做图，推公式",
   certificate:"英语六级证书（有可能及格不了哈哈）",
   read:"十本左右吧，推荐：愿你慢慢长大；看着比较温暖治愈",
   change:"面临毕业，找工作读博等选择.，总体来说迷茫加忙碌着",
   city:"在焦作读书生活",
   sport:"第一次跑完五公里，其他的计划几乎全搁浅",
   people:"我的硕士生导师",
  },{time:"2019/12/30 13:06:05",
   name:"小小小不停",
   age:"80后",
   learn:"养猫知识",
   certificate:"评标专家",
   read:"丧钟为谁而鸣",
   change:"养了一只小猫",
   city:"去了蒙古俄罗斯马来西亚印尼",
   sport:"躺着",
   people:"我儿子",
  },{time:"2019/12/30 13:06:03",
   name:"里昂",
   age:"80后",
   learn:"背单词",
   certificate:"没有",
   read:"5本 巨婴国",
   change:"健身",
   city:"大理",
   sport:"19年没计划",
   people:"王晔谅",
  },{time:"2019/12/30 13:03:51",
   name:"Sally Cui",
   age:"80后",
   learn:"重新开始学习英语，背了很多单词~~",
   certificate:"CATTI，但是还没出结果",
   read:"一本书没看，汗￣^￣゜",
   change:"一如既往，没啥改变",
   city:"泰国旅游",
   sport:"参加了5公里马拉松",
   people:"一个同事，Joyce Liu",
  },{time:"2019/11/18 18:01:22",
   name:"吾wang矣",
   age:"90后",
   learn:"arduino开发",
   certificate:"无",
   read:"5本，算法霸权",
   change:"体重如愿上涨十斤",
   city:"年前再抢救一下该计划",
   sport:"晨跑",
   people:"顾子明",
  },{time:"2019/11/18 17:41:32",
   name:"羽琪Aires",
   age:"90后",
   learn:"档案学😂 一点点经济学、理财",
   certificate:"医护英语等级考试三级证书",
   read:"超额完成目标！50➕ 推荐：薛兆丰经济学讲义",
   change:"多读书，思想丰富",
   city:"没得旅游，阔惜",
   sport:"瑜伽冥想算不算 🤦‍♂‍",
   people:"EX",
  },{time:"2019/11/18 17:41:16",
   name:"空调",
   age:"80后",
   learn:"无……",
   certificate:"无……",
   read:"没数，推荐红楼梦",
   change:"更安逸了",
   city:"出差些个地方，旅游没有",
   sport:"数个月的跑量挑战",
   people:"洋阳",
  },{time:"2019/11/18 14:34:27",
   name:"亮",
   age:"90后",
   learn:"数据机构（计算机类）",
   certificate:"二建增补项，注电未知",
   read:"六月份计划是50本左右，目前读完65本。",
   change:"有扇贝读书群的陪伴下，似乎又读了不少书。生活也多了些乐趣～",
   city:"去南京，武汉共呆了一周左右～本来计划去青岛来着，奈何没去成～",
   sport:"汗颜😓，没能坚持下去",
   people:"各位书友",
  },{time:"2019/11/18 14:22:22",
   name:"sailorsdog",
   age:"70后",
   learn:"爬虫，全马，健身，手术，育儿",
   certificate:"没有",
   read:"激荡十年，Fragile lives.. Born a crime. 银河帝国",
   change:"搬进新家，添了二宝，成功减肥，重新适应工作",
   city:"在苏州跑完全程马拉松",
   sport:"半马证书一个，全马证书一个",
   people:"家人",
  },{time:"2019/11/18 14:13:02",
   name:"Cyrusky",
   age:"80后",
   learn:"好多啊，机器学习，vue，爬虫，react",
   certificate:"有，俩，DevOps Master, 系统架构设计师",
   read:"到目前为止34本吧",
   change:"坚持学习，感谢小组让我这么上进。",
   city:"没有旅游，也没有更换居所，希望明年能够去杭州。",
   sport:"无计划",
   people:"Kimmy,my boy.",
  },{time:"2019/11/18 13:54:56",
   name:"雨天",
   age:"70后",
   learn:"企业管理，历史知识",
   certificate:"无",
   read:"10多本。论中国 世界秩序 关键对话",
   change:"更加忙碌，向着更好的方向发展。",
   city:"钱紧，没出去",
   sport:"半马又黄了",
   people:"保密",
  },{time:"2019/11/18 13:51:09",
   name:"Sekoan",
   age:"90后",
   learn:"有开始断断续续地练习瘦金书，有比较系统地进行健身",
   certificate:"希望一个月后的6级能通过",
   read:"大概10本左右吧，管理的实践，还有科学管理原理",
   change:"更规律，计划性更强了",
   city:"哪里都没去，老老实实在魔都待着",
   sport:"每个工作日都去健身房，身材比去年好多了",
   people:"我1岁多的女儿，作为老父亲沉重的责任感使我每天都发愤图强",
  },{time:"2019/11/18 13:47:18",
   name:"Angela亲妈",
   age:"80后",
   learn:"财务",
   certificate:"考了，没得到",
   read:"查令十字街84号",
   change:"胖了",
   city:"也是去了几个城市，但是感受最好的是在近郊搭个帐篷的休闲午后",
   sport:"瑜伽居然做了3次之多，还有一些骑行",
   people:"小组里优秀的小伙伴们",
  },{time:"2019/11/18 13:45:17",
   name:"浅墨",
   age:"90后",
   learn:"设计模式",
   certificate:"",
   read:"特斯拉传",
   change:"早上打卡",
   city:"北京",
   sport:"",
   people:"",
  },{time:"2019/11/18 13:35:33",
   name:"周六六",
   age:"90后",
   learn:"get 高级茶艺师",
   certificate:"凉了一个，还有个在等……就先不提了……",
   read:"",
   change:"完成人生大事一件",
   city:"南昌……江苏网红地打卡（真是喜欢），千岛湖（惬意）",
   sport:"",
   people:"洋洋 —— 不时对我发起灵魂拷问",
  },

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height


    }) 

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})