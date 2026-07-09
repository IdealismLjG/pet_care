"use client";

import { useEffect, useState } from "react";

const carouselSlides = [
  {
    src: "/assets/interior-reception.png",
    alt: "高端宠物洗护店前台接待与零售展示区",
    label: "查看前台接待区",
  },
  {
    src: "/assets/interior-wash-spa.png",
    alt: "高端宠物洗护店洗护水疗区域",
    label: "查看洗护水疗区",
  },
  {
    src: "/assets/interior-groom-lounge.png",
    alt: "高端宠物洗护店美容造型与等候区域",
    label: "查看美容等候区",
  },
];

const testimonials = [
  {
    quote:
      "我家狗以前洗澡很紧张，这次店员一直慢慢安抚，接回来的时候毛很蓬松，身上也没有刺鼻香味。",
    name: "豆豆家长",
    detail: "小型犬全套精护",
  },
  {
    quote:
      "猫咪胆子小，原本担心会应激。护理师先让它熟悉环境，全程都有反馈，回家后状态很放松。",
    name: "栗子家长",
    detail: "猫咪温和洗护",
  },
  {
    quote:
      "换季掉毛很严重，做完深层梳理后家里明显少了很多浮毛，还教了我日常梳毛的方法。",
    name: "可乐家长",
    detail: "皮毛护理",
  },
  {
    quote:
      "预约时间准，价格说明也清楚。美容造型没有剪得太夸张，保留了我家比熊圆圆的样子。",
    name: "奶球家长",
    detail: "美容造型",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <header className="topbar">
          <a className="brand" href="#top" aria-label="暖爪宠物洗护首页">
            <span className="brand-mark">爪</span>
            <span>暖爪宠物洗护</span>
          </a>
          <nav className="nav" aria-label="主导航">
            <a href="#services">服务</a>
            <a href="#prices">套餐</a>
            <a href="#booking">预约</a>
            <a href="#contact">门店</a>
            <a className="book" href="#booking">立即预约</a>
          </nav>
        </header>
      
        <main id="top">
          <section className="hero">
            <div>
              <span className="eyebrow">一宠一护 · 温和清洁 · 透明可见</span>
              <h1>让毛孩子干净、舒服、漂亮回家</h1>
              <p>暖爪为猫咪和狗狗提供洗澡、美容、护理、除味和皮毛养护服务。独立洗护间、低敏产品、耐心安抚，让每一次洗护都更安心。</p>
              <div className="hero-actions">
                <a className="button primary" href="#booking">预约洗护</a>
                <a className="button secondary" href="#prices">查看套餐</a>
              </div>
              <div className="stats" aria-label="门店数据">
                <div className="stat"><strong>4.9</strong><span>顾客评分</span></div>
                <div className="stat"><strong>30+</strong><span>护理项目</span></div>
                <div className="stat"><strong>1v1</strong><span>专属洗护</span></div>
              </div>
            </div>
            <div className="hero-media">
              <div className="carousel" aria-label="店内环境轮播图">
                {carouselSlides.map((slide, index) => (
                  <figure
                    className={`carousel-slide${index === activeSlide ? " is-active" : ""}`}
                    key={slide.src}
                  >
                    <img src={slide.src} alt={slide.alt} />
                  </figure>
                ))}
              </div>
              <div className="hero-card">
                <b>高端独立洗护空间</b>
                <span>前台接待、专业洗护、水疗护理、美容造型和等候区分区明确，环境干净明亮。</span>
              </div>
              <div className="carousel-dots" aria-label="切换店内环境图片">
                {carouselSlides.map((slide, index) => (
                  <button
                    className={`carousel-dot${index === activeSlide ? " is-active" : ""}`}
                    key={slide.label}
                    type="button"
                    aria-label={slide.label}
                    onClick={() => setActiveSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          </section>
      
          <section id="services">
            <div className="section-head">
              <h2>从基础清洁到精致造型，一站式照顾</h2>
              <p>每只宠物都有独立毛发、皮肤和情绪状态，我们会先评估，再选择适合的产品和流程。</p>
            </div>
            <div className="services">
              <article className="service">
                <div className="service-icon">泡</div>
                <h3>温和沐浴</h3>
                <p>低敏洗护、深层清洁、吹干梳顺，减少毛结和异味。</p>
              </article>
              <article className="service">
                <div className="service-icon">剪</div>
                <h3>精修造型</h3>
                <p>按品种、季节和主人偏好设计舒适好打理的造型。</p>
              </article>
              <article className="service">
                <div className="service-icon">护</div>
                <h3>皮毛护理</h3>
                <p>针对干燥、掉毛、毛躁进行保湿、养护和蓬松处理。</p>
              </article>
              <article className="service">
                <div className="service-icon">净</div>
                <h3>细节清洁</h3>
                <p>耳道、脚底、肛门腺、指甲等细节项目可灵活加选。</p>
              </article>
            </div>
          </section>
      
          <section className="band">
            <div className="section-head">
              <h2>每一步都看得见，也慢得下来</h2>
              <p>我们把洗护拆成清楚的步骤，不催、不吓、不强迫，让宠物有适应时间。</p>
            </div>
            <div className="process-grid">
              <article className="process">
                <span>01</span>
                <h3>到店评估</h3>
                <p>检查皮肤、毛结、耳朵和情绪状态，确认适合的护理方式。</p>
              </article>
              <article className="process">
                <span>02</span>
                <h3>温水清洁</h3>
                <p>用适合的水温和洗护产品分区清洁，保护皮脂层。</p>
              </article>
              <article className="process">
                <span>03</span>
                <h3>吹干梳理</h3>
                <p>低刺激吹干，边吹边梳，及时处理打结和浮毛。</p>
              </article>
              <article className="process">
                <span>04</span>
                <h3>交付反馈</h3>
                <p>告知本次护理发现的问题，并给出居家梳毛建议。</p>
              </article>
            </div>
          </section>
      
          <section id="prices">
            <div className="section-head">
              <h2>清晰套餐，按宠物体型灵活调整</h2>
              <p>以下为常用起步价，特殊毛量、严重打结或攻击行为会提前沟通加收。</p>
            </div>
            <div className="prices">
              <article className="price">
                <h3>基础洗护</h3>
                <p>适合日常清洁和除味</p>
                <div className="amount">¥88 <small>起</small></div>
                <ul>
                  <li>沐浴清洁</li>
                  <li>吹干梳理</li>
                  <li>脚底毛修剪</li>
                  <li>耳部基础清洁</li>
                </ul>
              </article>
              <article className="price featured">
                <span className="tag">热门</span>
                <h3>全套精护</h3>
                <p>适合需要完整护理的宠物</p>
                <div className="amount">¥158 <small>起</small></div>
                <ul>
                  <li>基础洗护全项目</li>
                  <li>指甲修剪</li>
                  <li>肛门腺护理</li>
                  <li>保湿护毛素</li>
                </ul>
              </article>
              <article className="price">
                <h3>美容造型</h3>
                <p>适合修剪、造型和换季打理</p>
                <div className="amount">¥238 <small>起</small></div>
                <ul>
                  <li>全套精护</li>
                  <li>品种造型修剪</li>
                  <li>毛结处理建议</li>
                  <li>护理照片反馈</li>
                </ul>
              </article>
            </div>
          </section>
      
          <section className="reviews">
            <div className="section-head">
              <h2>被宠物喜欢，才是真的洗得好</h2>
              <p>很多胆小、怕吹风或第一次到店的小朋友，会在第二次开始主动放松下来。</p>
            </div>
            <div className="reviews-carousel" aria-label="客户评价轮播">
              <div className="reviews-track">
                {testimonials.map((review, index) => (
                  <article
                    className={`quote${index === activeReview ? " is-active" : ""}`}
                    key={review.name}
                    aria-hidden={index !== activeReview}
                  >
                    <p>“{review.quote}”</p>
                    <span>{review.name} · {review.detail}</span>
                  </article>
                ))}
              </div>
              <div className="review-dots" aria-label="切换客户评价">
                {testimonials.map((review, index) => (
                  <button
                    className={`review-dot${index === activeReview ? " is-active" : ""}`}
                    key={review.name}
                    type="button"
                    aria-label={`查看${review.name}的评价`}
                    onClick={() => setActiveReview(index)}
                  ></button>
                ))}
              </div>
            </div>
          </section>
      
          <section className="booking" id="booking">
            <div className="booking-info" id="contact">
              <h2>预约一次轻松的洗护时间</h2>
              <p>填写信息后，我们会根据宠物体型、毛量和性格确认具体时段。也可以直接电话或微信咨询。</p>
              <div className="contact-list">
                <div className="contact-item">
                  <strong>营业时间</strong>
                  <span>周一至周日 10:00-20:00</span>
                </div>
                <div className="contact-item">
                  <strong>门店地址</strong>
                  <span>上海市宜川路街道陕西北路 1620 号</span>
                </div>
                <div className="contact-item">
                  <strong>联系电话</strong>
                  <span>138-0000-8888</span>
                </div>
              </div>
              <figure className="store-map" aria-label="暖爪宠物洗护陕西北路1620号门店示意地图">
                <div className="map-art">
                  <img src="/assets/store-location-map-ai.png" alt="可爱清爽的宠物店手绘风格门店位置地图，中心用爪印定位标标出暖爪宠物洗护" />
                  <div className="map-store-badge">暖爪宠物洗护</div>
                  <div className="map-address-pill">陕西北路 1620 号</div>
                </div>
                <figcaption className="map-caption">
                  <span><strong>门店标注：</strong>陕西北路 1620 号，靠近宜川路街道生活圈。</span>
                  <a className="map-route" href="https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%AE%9C%E5%B7%9D%E8%B7%AF%E8%A1%97%E9%81%93%E9%99%95%E8%A5%BF%E5%8C%97%E8%B7%AF1620%E5%8F%B7" target="_blank" rel="noopener">打开导航</a>
                </figcaption>
              </figure>
            </div>
            <form>
              <label>
                主人姓名
                <input type="text" placeholder="例如：李女士" />
              </label>
              <label>
                联系电话
                <input type="tel" placeholder="请输入手机号" />
              </label>
              <label>
                宠物类型
                <select>
                  <option>小型犬</option>
                  <option>中大型犬</option>
                  <option>猫咪</option>
                  <option>其他宠物</option>
                </select>
              </label>
              <label>
                预约项目
                <select>
                  <option>基础洗护</option>
                  <option>全套精护</option>
                  <option>美容造型</option>
                  <option>先到店评估</option>
                </select>
              </label>
              <label className="wide">
                期望时间
                <input type="text" placeholder="例如：本周六下午 3 点" />
              </label>
              <label className="wide">
                宠物情况
                <textarea placeholder="可以备注年龄、体重、是否怕水、是否有毛结或皮肤问题"></textarea>
              </label>
              <button className="wide" type="button">提交预约信息</button>
            </form>
          </section>
        </main>
      
        <footer>
          <span>© 2026 暖爪宠物洗护</span>
          <span>温和洗护 · 透明护理 · 预约优先</span>
        </footer>
    </>
  );
}
