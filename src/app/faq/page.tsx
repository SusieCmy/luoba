'use client';

import { Collapse, Card, Typography } from 'antd';

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

export default function DapPage() {
    const dapItems = [
        {
            key: '1',
            label: '博客发布很久了，却没人互动是什么原因?',
            children: (
                <div>
                    您的博客的内容可能不够吸引人，我们可以提高内容质量，优质清晰的图片更容易吸引其他用户的点击，此外我们还可以在博客中新增属于自己的兴趣标签，或及时参与热门话题来增加曝光量，我们会定期进行内容审核和更新。
                </div>
            ),
        },
        {
            key: '2',
            label: '为什么我无法发表评论?',
            children: (
                <div>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>代码托管和版本控制</li>
                        <li>自动化构建和部署</li>
                        <li>应用监控和日志管理</li>
                        <li>API 管理和测试工具</li>
                        <li>数据库和存储服务</li>
                        <li>安全认证和权限管理</li>
                    </ul>
                </div>
            ),
        },
        {
            key: '3',
            label: '当我忘记登陆密码了怎么办?',
            children: (
                <div>
                    <Paragraph>开始使用 DAP 非常简单：</Paragraph>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>注册 DAP 开发者账户</li>
                        <li>创建新的应用项目</li>
                        <li>配置开发环境</li>
                        <li>编写和测试代码</li>
                        <li>部署到生产环境</li>
                    </ol>
                </div>
            ),
        },
        {
            key: '4',
            label: '如何成为Time Zone的专栏作家？',
            children: (
                <div>
                    <Paragraph>DAP 支持多种主流技术栈：</Paragraph>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <strong>前端框架：</strong>
                            <ul className="list-disc pl-4 mt-2">
                                <li>React / Next.js</li>
                                <li>Vue / Nuxt.js</li>
                                <li>Angular</li>
                                <li>Svelte</li>
                            </ul>
                        </div>
                        <div>
                            <strong>后端框架：</strong>
                            <ul className="list-disc pl-4 mt-2">
                                <li>Node.js / Express</li>
                                <li>Python / Django</li>
                                <li>Java / Spring</li>
                                <li>Go / Gin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            key: '5',
            label: '当我遇到不喜欢的内容，应该怎么减少此类推荐？',
            children: (
                <div>
                </div>
            ),
        },
        {
            key: '6',
            label: '常见问题解答',
            children: (
                <div>
                    <div className="space-y-4">
                        <div>
                            <strong>Q: DAP 是否支持私有化部署？</strong>
                            <p className="mt-1">A: 是的，企业版支持私有化部署，可以部署在您的内网环境中。</p>
                        </div>
                        <div>
                            <strong>Q: 如何迁移现有项目到 DAP？</strong>
                            <p className="mt-1">A: 我们提供了完整的迁移工具和文档，支持从 GitHub、GitLab 等平台一键迁移。</p>
                        </div>
                        <div>
                            <strong>Q: DAP 的数据安全性如何？</strong>
                            <p className="mt-1">A: 我们采用企业级安全标准，包括数据加密、访问控制、备份恢复等措施。</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="text-center mb-[30px]">
                    <Title level={1} className="!text-[24px] font-bold text-gray-900 mb-4 mt-[70px]">
                        常见问题解答FAQ
                    </Title>
                    <Paragraph className="text-[16px] !text-[#777777] max-w-2xl mx-auto mt-[20px]">
                        在使用博客时，可能会遇到各种技术、内容和社交方面的挑战。以下是一些可能的问题和相应的解决方法。
                    </Paragraph>
                </div>

                <Card className="shadow-lg">
                    {/* expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} */}
                    <Collapse
                        bordered={false}
                        expandIconPosition="end"
                        defaultActiveKey={['1']}
                        className="bg-white"
                        size="large"
                    >
                        {dapItems.map(item => (
                            <Panel key={item.key} header={item.label} className="text-lg">
                                {item.children}
                            </Panel>
                        ))}
                    </Collapse>
                </Card>

                <div className="mt-12 text-center">
                    <Card className=" text-white">
                        <Title level={2} className="text-white mb-4 !text-[22px]">找不到想问的问题?</Title>
                        <div className="space-x-4 mt-10">
                            <button className="bg-white w-[152px] border-[1px] border-[#00AAA1] h-[46px] text-[#00AAA1] text-[#00AAA1] px-6 py-2 rounded-lg">
                                联系我们
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}