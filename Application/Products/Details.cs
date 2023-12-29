using Domain.Entity;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Products
{
    public class Details
    {
        public class Query : IRequest<Product>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Product>
        {
            private readonly StoreContext _context;
            public Handler(StoreContext context)
            {
                _context = context;
            }

            public async Task<Product> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Products.FindAsync(request.Id);
            }
        }

    }
}

