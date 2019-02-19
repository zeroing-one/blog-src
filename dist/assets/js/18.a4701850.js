(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{173:function(a,r,t){"use strict";t.r(r);var e=t(0),_=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"前置知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前置知识","aria-hidden":"true"}},[a._v("#")]),a._v(" 前置知识")]),a._v(" "),t("h2",{attrs:{id:"基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础","aria-hidden":"true"}},[a._v("#")]),a._v(" 基础")]),a._v(" "),t("h3",{attrs:{id:"进程与线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程","aria-hidden":"true"}},[a._v("#")]),a._v(" 进程与线程")]),a._v(" "),t("p",[a._v("进程：进程就是操作系统开启的一个任务，比如记事本打开一个文件，打开一个浏览器等。")]),a._v(" "),t("p",[a._v('线程：在一个线程内部同时运行着多个"子任务"，可以把这些子任务称之为线程.比如打开word，会同时进行打字输入和拼写检查等一系列同时进行的操作.所以一个进程由很多个线程组成。线程实际是操作系统的最小执行单元。')]),a._v(" "),t("p",[a._v("线程比进程更轻量，线程之间是共享内存的，不同线程之间的交互就更容易实现.多进程之间的通信需要借助消息队列、共享内存等复杂方式才能实现。")]),a._v(" "),t("h3",{attrs:{id:"io模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#io模型","aria-hidden":"true"}},[a._v("#")]),a._v(" IO模型")]),a._v(" "),t("p",[a._v("IO: Input/Output 的缩写，计算机世界中涉及到数据交换的地方就需要IO接口。")]),a._v(" "),t("h3",{attrs:{id:"同步io和异步io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步io和异步io","aria-hidden":"true"}},[a._v("#")]),a._v(" 同步IO和异步IO")]),a._v(" "),t("p",[a._v("例子：程序往磁盘写入一个文本文件，往磁盘写入数据需要磁盘的IO操作，相比之下程序往内存写入数据慢很多，需要等待磁盘IO操作完成，才能进行下一步。")]),a._v(" "),t("p",[a._v("上面这个例子就是一个同步IO,同步IO会阻塞（IO操作完成前会阻塞）后面的代码执行")]),a._v(" "),t("p",[a._v("在同一线程内，执行一些耗时的任务时，其他代码是不能继续执行的，要等待该任务操作完之后才可以。为了解决这个问题，就有了异步IO")]),a._v(" "),t("p",[a._v("异步IO: 当程序需要执行一个非常耗时的IO操作的时候，它只发出IO指令，不需要等待IO的结果，然后可以继续执行其他的代码了。当IO返回结果时，再通知CPU去处理，这就是异步IO。")]),a._v(" "),t("p",[a._v("总结：同步IO模型下，主线程只能被挂起等待，但是在异步IO模型中，主线程发起IO指令后，可以继续执行其他指令，没有被挂起，也没有切换线程的操作。由此看来，使用异步IO明显可以提高了系统性能。")]),a._v(" "),t("h3",{attrs:{id:"tcp-ip和udp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip和udp","aria-hidden":"true"}},[a._v("#")]),a._v(" TCP/IP和UDP")]),a._v(" "),t("p",[a._v("打开一个网页背后所发生的事：")]),a._v(" "),t("ol",[t("li",[a._v("浏览器通过TCP/IP协议建立到服务器的TCP连接")]),a._v(" "),t("li",[a._v("客户端向服务器发送http协议请求包")]),a._v(" "),t("li",[a._v("服务器向客户端发送http协议应答包，如果请求的资源中有动态语言的内容，会调用动态语言的解释引擎处理完后再放入应答包")]),a._v(" "),t("li",[a._v("客户端收到响应，断开TCP链接，通过浏览器解释html文档渲染页面")])]),a._v(" "),t("p",[a._v("客户端和服务器之间通信：")]),a._v(" "),t("ol",[t("li",[a._v("IP协议负责把你本机的数据发送到服务端，数据被分割成一块一块的。然后通过IP包发送出去。IP包的特点是按块发送，但不保证能到达，也不保证数据块依次到达。这样进行数据传输，服务器根本不能保证接收到的数据的完整性和顺序性")]),a._v(" "),t("li",[a._v("于是乎，TCP协议应运而生，它是建立在IP协议之上，专门负责建立可靠连接，并保证数据包顺序到达。TCP协议会通过握手建立连接，然后，对每个IP包编号，确保对方顺序收到，如果出现丢包，则重新发送。")]),a._v(" "),t("li",[a._v("TCP协议还有一个更重要的特点，它是基于数据流的。这就好比客户端和服务端要进行数据交互，中间有一个管子连接着，这个时候交互数据就好比管子中的水，当数据在传输（水在流动）的过程中，服务端是无法知道哪段数据是我们想要的完整数据。")])]),a._v(" "),t("p",[a._v("UDP协议：UDP协议进行通信的最大区别就是，UDP不需要建立连接，给他一个ip和端口，就可以直接发送数据包了。但是，能不能成功到达就不知道了。虽然UDP传输不可靠，但是速度快。对于一些对数据要求不高的场景，使用UDP通信无疑是不错的选择。")]),a._v(" "),t("h2",{attrs:{id:"swoole的进程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swoole的进程模型","aria-hidden":"true"}},[a._v("#")]),a._v(" swoole的进程模型")]),a._v(" "),t("p",[a._v("swoole启动一个Server后，会存在三种进程")]),a._v(" "),t("ol",[t("li",[a._v("Master")]),a._v(" "),t("li",[a._v("Manager")]),a._v(" "),t("li",[a._v("worker/taskWorker")])]),a._v(" "),t("h3",{attrs:{id:"master进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#master进程","aria-hidden":"true"}},[a._v("#")]),a._v(" Master进程")]),a._v(" "),t("p",[a._v("是一个多线程程序，包括主线程和Reactor")]),a._v(" "),t("ol",[t("li",[a._v("主线程主要是Accept操作和信号处理")]),a._v(" "),t("li",[a._v("Reactor线程负责处理TCP连接、网络IO和收发数据等")])]),a._v(" "),t("h3",{attrs:{id:"manager进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manager进程","aria-hidden":"true"}},[a._v("#")]),a._v(" Manager进程")]),a._v(" "),t("p",[a._v("专门负责worker/task进程的fork操作和管理, manager的任务本来可以由master进程来负责，对于多线程的Master进程而言，想要多Worker进程就必须fork操作，但是fork操作是不安全的. 所以Manager进程就是为了保证Master进程的稳定.")]),a._v(" "),t("p",[a._v("通常，worker进程被误杀或者由于程序的原因会异常退出，Manager进程为了保证服务的稳定性，会重新拉起新的worker进程")]),a._v(" "),t("h3",{attrs:{id:"worker-taskworker进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#worker-taskworker进程","aria-hidden":"true"}},[a._v("#")]),a._v(" worker/taskWorker进程")]),a._v(" "),t("p",[a._v("worker进程：负责具体的业务代码\ntask进程：负责处理时间比较久的任务")])])}],!1,null,null,null);_.options.__file="README.md";r.default=_.exports}}]);