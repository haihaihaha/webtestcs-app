// Home
import React, { Component, Fragment } from 'react'

import './index.css'

export default class Home extends Component {
  //状态
  state = {
    //存储最近搜索热词
    popular: ['JAVA工程师', 'web后端工程师', 'UI / UX', '行政管理'],
    //岗位关键字
    postKeyWord:'',
    //位置
    location:'',
    //分类
    classify:'',
    //岗位信息
    postMessage:"",
    //信息提交邮箱
    subEmail:""
  }
  //方法
  changeHandle = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Fragment>
        <div className='container__home'>
          {/* box1 */}
          <div className="box__img1">
            {/* Navbar 导航栏 */}
            <div className='nav__fixed'>
              <div className='logobox' style={{ float: 'left' }}>
                <img src="image/icons_search.png" style={{ width: '60px', margin: '20px 10px 10px 50px' }} alt="图片" />
                <span>创思找工作</span>
              </div>
              <ul className='nav__ul'>
                <li>首页</li>
                <li>岗位展示</li>
                <li>工作分类</li>
                <li>关于创思</li>
                <li onClick={() => { this.props.history.replace('/login')}}>登录</li>
                <li><button>发布岗位</button></li>
              </ul>
            </div>
            {/* 文字区 */}
            <div className='text__box'>
              <p style={{ fontSize: '30px' }}>269+岗位需求</p>
              <p style={{ fontSize: '40px' }}>预祝你在创思信息找到心仪的工作</p>
              <p style={{ fontSize: '15px', width: '350px' }}>创思信息以“工匠精神”推动产业互联网升级，推动政府事务单位业务处理自动化，助力工业4.0转型升级！ </p>
              <button>查看岗位</button>
            </div>
          </div>
          {/* Popular Search */}
          <div className='box__k'>
            <div className='popular_search_box'>
              <input type="text" placeholder='输入岗位关键字' name='postKeyWord' onChange={this.changeHandle} />
              <input type="text" placeholder='位置' name='location' onChange={this.changeHandle} />
              <select name="classify" placeholder='分类' onChange={this.changeHandle}>
                {/* 纯CSS伪类 实现select的placeholder效果 */}
                <option value="" disabled selected hidden>分类</option>
                <option value="">在肝了</option>
                <option value="">在肝了</option>
              </select>
              <select name="postMessage" placeholder='选择岗位信息' onChange={this.changeHandle}>
                <option value="" disabled selected hidden>选择岗位信息</option>
                <option value="" >在肝了</option>
                <option value="">在肝了</option>
              </select>
              <button>找工作</button>
            </div>

            <div className='popular_searchshow_box'>
              <span>最近搜索热词：</span>
              {
                this.state.popular.map((item, index) => {
                  return <button key={index}>{item}</button>
                })
              }
            </div>

          </div>
          {/* Popular Category */}
          <div className='popular_category'>
            {/* 左区  卡片*/}
            <div className='popular_category_left'>
              {/* 卡片 */}
              <div className='img_p_box'>
                <div className='img_box'>
                  <img src="image/carbon_application-web.png" alt="PNG" />
                </div>
                <span>应用开发</span>
                <p>按照“平台+应用”的研发模式，形成了“智慧政务”、“智慧企业系列解决方案 </p>
              </div>

              <div className='img_p_box' style={{ margin: '50px 0 0 30px' }}>
                <div className='img_box'>
                  <img src="image/nimbus_marketing.png" alt="PNG" />
                </div>
                <span>核心平台</span>
                <p>拥有大数据、云计算、移动互联网、人工智能、云移动设备的核心技术平台</p>
              </div>

              <div className='img_p_box'>
                <div className='img_box'>
                  <img src="image/bi_code-slash.png" alt="PNG" />
                </div>
                <span>智慧系统</span>
                <p>国内智慧政务、智慧企业、智慧社区及智慧生活领域的信息化综合服务提供商</p>
              </div>

              <div className='img_p_box' style={{ margin: '50px 0 0 30px' }}>
                <div className='img_box'>
                  <img src="image/arcticons_tagwriter.png" alt="PNG" />
                </div>
                <span>IT运维</span>
                <p>提供集软件开发、系统集成、IT运维、平台建设等于一体的信息化综合解决方案</p>
              </div>
            </div>
            {/* 右区 文字 */}
            <div className='popular_category_right'>
              <span>创思竞争优势</span>
              <p>创思信息科技发展有限公司成立于2000年，是国内智慧政务、智慧企业、智慧社区及智慧生活领域的信息化综合服务提供商，主要致力于为政企客户、社会团体和个人提供集软件开发、系统集成、IT运维、平台建设等于一体的信息化综合解决方案。 创思信息注重跟踪最新技术发展趋势，在大数据、云计算、移动互联网、人工智能、云移动设备等领域都已创建了多个具有自主知识产权且处于国内领先地位的核心技术平台。</p>
            </div>
          </div>
          {/* Top Companies */}
          <div className='top_companies_box'>
            {/* 左区 文字 */}
            <div className='top_companies_box_left'>
              <span>创思团队建设</span>
              <p>获得工信部计算机系统集成壹级资质，通过ISO020000 IT服务管理体系认证，通过软件能力成熟度模型CMMI 5级认证，通过ISO27001信息安全管理系统认证，通过ISO14001国际环境管理系统认证，通过ITSS信息技术服务运行维护标准认证，获得专利技术1200余项，自有知识产权框架平台8个，获得软件著作权2500多个。创思信息现有员工530余人，其中：博士生100余人，研究生200余人，专业技术人才230余人。公司总部位于湖南长沙，下设杭州分公司、北京分公司、广州分公司、海口分公司、西安分公司、湘潭分公司及办事处。</p>
            </div>
            {/* 右区 卡片 */}
            <div className='top_companies_box_right'>
              <div style={{ float: 'left' }}>
                <div className='img_p_box2' style={{ backgroundColor: '#2A2AD1' }}>
                  <img src="image/Naver_Line_Webtoon_logo 1.png" alt="PNG" /><br />
                  <span style={{ color: 'white' }}>人才培养</span>
                  <p style={{ color: 'white' }}>创思信息在湖南、广东设有自己的培训学校，员工可带薪报名参与。公司每年人才培养资金高达1.4个亿。</p>
                </div>

                <div className='img_p_box2' >
                  <img src="image/shopee-logo-40482 1.png" alt="PNG" /><br />
                  <span >职位晋升</span>
                  <p >完备的职级晋升机制，公开透明，能力优先，以技术和资质为基础，为员工安排公平公开的职级晋升线路。</p>
                </div>
              </div>

              <div style={{ float: 'right', margin: '50px 0' }}>
                <div className='img_p_box2'>
                  <img src="image/Dribbble_logo_perple 1.png" alt="PNG" /><br />
                  <span>团建活动</span>
                  <p>团建活动有周末团建、下午茶、月团建、大团建、生日派对、一年一个大旅游团建。</p>
                </div>

                <div className='img_p_box2' >
                  <img src="image/tokopedia-logo-40654CCDD6-seeklogo 1.png" alt="PNG" /><br />
                  <span >项目奖金</span>
                  <p >创思80%以上的项目为自研自维护项目，项目开发及运维，提供丰厚的项目奖金，保证团队稳定。</p>
                </div>
              </div>

            </div>
          </div>
          {/* Looking */}
          <div className='looking_box'>
            <div className='looking_text'>
              <span>你是不是想在创思找工作？</span>
              <p>我们在线上为您安排了200多个工作岗位，欢迎你咨询！您可查询本网，可快速了解现有岗位情况。</p>
              <button>岗位展示</button>
            </div>

            <div className='looking_text'>
              <span>你是不是想在平台发布工作？</span>
              <p>人力资源部、部门经理、项目经理，都可以在此平台发布工作了哦，欢迎试用！</p>
              <button>发布工作</button>
            </div>
          </div>
          {/* Testimonial */}
          <div className='testimonial_box'>
            <div>
              <img src="image/Image Testitomi.png" alt="PNG" />
            </div>

            <div className='testimonial_doc'>
              <span>用户评价</span>
              <p>“UI小姐姐在此提示现在正在制作这个页面的各位前端朋友，希望你能顺利通过测试，取得较好的成绩，不要忘记哦，这个页面需要做自适应，请按f12进入开发者模式，适配不同的屏幕大小。这个千万不要忘记哦。另外按钮动作，浮动动画也可以有哦。相信你，加油！”</p>
            </div>
          </div>
          {/* Footer */}
          <div className='footer_box'>
            <div className='footer_doc2'>
              <img src="image/Logo.png" alt="" />
              <span>祝你的工作能被项目组认同</span><br />
              <span>chances@gmail.com</span><br />
              <span>400-660-0559</span><br />
              <span>欢迎来电咨询</span><br />
            </div>

            <div className='footer_doc1'>
              <h3>站内导航</h3>
              <span >关于创思</span><br />
              <span >创建问题</span><br />
              <span>展示岗位</span><br />
              <span>薪资说明</span><br />
            </div>

            <div className='footer_doc1'>
              <h3>工作分类</h3>
              <span>java工程师</span><br />
              <span>UI/UX工程师</span><br />
              <span>Web工程师</span><br />
              <span>行政管理</span><br />
            </div>

            <div className='footer_doc3'>
              <h3>信息提交</h3>
              <div className='int_innerbut'>
                <input 
                  type="text" 
                  placeholder='邮箱' 
                  name='subEmail' 
                  onChange={this.changeHandle}/>
                <button onClick={()=>{alert('尊敬的'+this.state.subEmail+':已收到您的邮箱哦！');}}>提交</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
